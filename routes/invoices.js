const express = require("express");
const router = express.Router();
const db = require("../db");

//POST SECTION
// CREATE invoice
router.post("/", (req, res) => {
  const { client_id, items, issue_date, due_date } = req.body;

  //  VALIDATION (IMPORTANT)
  if (!items || items.length === 0) {
    return res.status(400).json({
      error: "Invoice must have at least 1 item"
    });
  }

  const invoice_number = "INV-" + Date.now();

  let total = 0;

  items.forEach(item => {
    total += item.quantity * item.price;
  });

  db.run(
    `INSERT INTO invoices (client_id, invoice_number, issue_date, due_date, status, total_amount)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [client_id, invoice_number, issue_date, due_date, "pending", total],
    function (err) {
      if (err) return res.status(500).json(err);

      const invoiceId = this.lastID;

      const stmt = db.prepare(
        "INSERT INTO invoice_items (invoice_id, description, quantity, price) VALUES (?, ?, ?, ?)"
      );

      items.forEach(item => {
        stmt.run(invoiceId, item.description, item.quantity, item.price);
      });

      stmt.finalize();

      res.json({
        message: "Invoice created successfully",
        invoiceId
      });
    }
  );
});

//GET SECTION
// GET  all invoices
router.get('/', (req, res) => {

  db.all('SELECT * FROM invoices', [], async (err, invoices) => {

    if (err) return res.status(500).json(err);

    const invoicesWithItems = await Promise.all(
      invoices.map(invoice => {

        return new Promise((resolve, reject) => {

          db.all(
            'SELECT * FROM invoice_items WHERE invoice_id = ?',
            [invoice.id],
            (err, items) => {

              if (err) reject(err);

              resolve({
                ...invoice,
                items
              });
            }
          );
        });
      })
    );

    res.json(invoicesWithItems);
  });
});

//  DELETE INVOICE
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  // Delete invoice items first
  db.run(
    'DELETE FROM invoice_items WHERE invoice_id = ?',
    [id],
    (err) => {
      if (err) return res.status(500).json(err);

      // Delete payments
      db.run(
        'DELETE FROM payments WHERE invoice_id = ?',
        [id],
        (err) => {
          if (err) return res.status(500).json(err);

          // Delete invoice
          db.run(
            'DELETE FROM invoices WHERE id = ?',
            [id],
            function (err) {
              if (err) return res.status(500).json(err);

              res.json({
                message: 'Invoice deleted successfully'
              });
            }
          );
        }
      );
    }
  );
});

module.exports = router;