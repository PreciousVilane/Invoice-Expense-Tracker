const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  const result = {};

  db.get(
    "SELECT SUM(total_amount) as income FROM invoices WHERE status = 'paid'",
    [],
    (err, incomeRow) => {
      if (err) return res.status(500).json(err);

      result.income = incomeRow.income || 0;

      db.get(
        "SELECT SUM(amount) as expenses FROM expenses",
        [],
        (err, expenseRow) => {
          if (err) return res.status(500).json(err);

          result.expenses = expenseRow.expenses || 0;
          result.profit = result.income - result.expenses;

          db.get(
            "SELECT COUNT(*) as outstanding FROM invoices WHERE status != 'paid'",
            [],
            (err, countRow) => {
              if (err) return res.status(500).json(err);

              result.outstanding = countRow.outstanding;

              res.json(result);
            }
          );
        }
      );
    }
  );
});

module.exports = router;