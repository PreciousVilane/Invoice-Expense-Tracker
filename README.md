# Invoice & Expense Tracker

## Project Overview

The Invoice & Expense Tracker is a full-stack financial management application designed to help users:

- Create and manage invoices with multiple line items
- Track payments (Paid / Pending status)
- Monitor income, expenses, and profit via a live dashboard
- Log and manage business expenses
- Generate downloadable professional PDF invoices
- Delete and manage invoice records
- View real-time financial insights using charts

This project simulates a real-world invoicing system similar to tools like QuickBooks or Xero.

## Features

1. Invoice Management
Create invoices with dynamic line items (description, quantity, price)
Auto-calculated totals per invoice
Track invoice status (Pending / Paid)
Delete invoices when no longer needed

2. Payments System
Mark invoices as Paid
Select payment method (Cash / EFT / Cheque)
Automatically updates invoice status
Stores payment history

3. Financial Dashboard
Total Income (Paid invoices)
Total Expenses
Profit calculation
Outstanding invoices tracking
Visual charts using Recharts

4. PDF Invoice Generator
Download professional invoices as PDF
Includes:
Company details
Client information
Itemized invoice table
VAT calculation (15%)
Subtotal & Grand total
Paid watermark

5. Expense Tracking
Log business expenses
Track spending vs income
Included in profit calculations

## Modern UI/UX

-Clean SaaS-style dashboard layout
-Responsive design (mobile-friendly)
-Card-based UI system
-Status badges (Paid / Pending / Overdue)
-Interactive buttons and hover effects

## Tech Stack

-Frontend
-React.js
-Recharts (data visualization)
-Tailwind CSS (UI styling)
-Backend
-Node.js
-Express.js
-Database
-SQLite
-jsPDF (PDF generation)
-REST API architecture

## Installation
1. Clone the repository
git clone git@github.com:PreciousVilane/Invoice-Expense-Tracker.git
cd invoice-tracker
2. Install backend dependencies
npm install
3. Start backend server
npm start

Server runs on:

http://localhost:5000
4. Start frontend
cd client
npm install
npm start

Frontend runs on:

http://localhost:3000

## API Endpoints

1. Invoices
GET /api/invoices — Get all invoices
POST /api/invoices — Create invoice
DELETE /api/invoices/:id — Delete invoice
2. Payments
POST /api/payments — Record payment
GET /api/payments/:invoice_id — Get payment history
3. Dashboard
GET /api/dashboard — Financial summary
4. Example Dashboard Response
{
  "income": 12500,
  "expenses": 3200,
  "profit": 9300,
  "outstanding": 3
}

   ## Key Learnings

  This project demonstrates:
  
  -Full-stack CRUD application development
  -REST API design and integration
  -Database relationships (invoices, items, payments)
  -Financial calculations and business logic
  -PDF generation from frontend
  -Professional UI/UX design principles
  -Real-world SaaS-style architecture

📄 License

This project is open-source and available under the MIT License.

🙌 Author

Built as a full-stack portfolio project to demonstrate real-world software development skills in invoicing, finance systems, and business logic applications.
