
const express = require("express");
const router = express.Router();
const db = require("../db");

//  Add payment
router.post("/", (req, res) => {
  const { invoice_id, amount, payment_method } = req.body;

  const date = new Date().toISOString();

  db.run(
    `INSERT INTO payments (invoice_id, amount, payment_date, payment_method)
     VALUES (?, ?, ?, ?)`,
    [invoice_id, amount, date, payment_method],
    function (err) {
      if (err) return res.status(500).json(err);

      //  Mark invoice as paid
      db.run(
        `UPDATE invoices SET status = 'paid' WHERE id = ?`,
        [invoice_id],
        (err) => {
          if (err) return res.status(500).json(err);

          res.json({ message: "Payment recorded & invoice marked as paid" });
        }
      );
    }
  );
});

//  Get payments for an invoice
router.get("/:invoice_id", (req, res) => {
  const { invoice_id } = req.params;

  db.all(
    `SELECT * FROM payments WHERE invoice_id = ?`,
    [invoice_id],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    }
  );
});

module.exports = router;