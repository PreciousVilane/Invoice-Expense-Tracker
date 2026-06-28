## Invoice-Expense-Tracker


A modern Invoice Tracker application built to help freelancers, small businesses, and entrepreneurs manage invoices, clients, and payments efficiently.

---

## 📌 Overview

The Invoice Tracker App is a full-stack web application that allows users to create, manage, and track invoices from one centralized dashboard.

The goal of the application is to simplify invoicing by providing an intuitive interface for managing clients, generating invoices, tracking payment status, and viewing financial summaries.

---

## ✨ Features

### Authentication
- User Registration
- Secure Login
- JWT Authentication
- Password Encryption
- User Profile

### Dashboard
- Overview of invoices
- Total Revenue
- Outstanding Payments
- Paid Invoices
- Recent Activity

### Client Management
- Add Clients
- Edit Client Information
- Delete Clients
- View Client History

### Invoice Management
- Create Invoice
- Edit Invoice
- Delete Invoice
- Duplicate Invoice
- Mark Invoice as Paid
- Mark Invoice as Pending
- View Invoice Details

### Payment Tracking
- Payment Status
- Due Dates
- Overdue Alerts
- Payment History

### Reports
- Monthly Revenue
- Outstanding Balances
- Invoice Statistics
- Client Revenue Reports

### Search & Filtering
- Search by Invoice Number
- Search by Client
- Filter by Status
- Filter by Date
- Sort Invoices

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- HTML5
- CSS3
- JavaScript (ES6+)
- Axios
- React Router

### Backend

- Django
- Django REST Framework
- JWT Authentication

### Database

- SQLite (Development)
- PostgreSQL (Production)

---



## 🔗 API Endpoints

### Authentication

```
POST /api/register/
POST /api/login/
POST /api/token/refresh/
```

### Clients

```
GET /api/clients/
POST /api/clients/
GET /api/clients/{id}/
PUT /api/clients/{id}/
DELETE /api/clients/{id}/
```

### Invoices

```
GET /api/invoices/
POST /api/invoices/
GET /api/invoices/{id}/
PUT /api/invoices/{id}/
DELETE /api/invoices/{id}/
```

---

## 🔐 Authentication

This project uses:

- JSON Web Tokens (JWT)
- Refresh Tokens
- Password Hashing
- Protected API Routes

---

## 📊 Future Improvements

- Email invoices
- PDF invoice generation
- Recurring invoices
- Online payments
- Multi-currency support
- Dark Mode
- Export to Excel
- Export to PDF
- Notifications
- Mobile Responsive Design
- Charts and Analytics
- Multi-user Organizations

---

## 🧪 Testing

Backend

```bash
python manage.py test
```

Frontend

```bash
npm test
```

---

## 🚀 Deployment

Backend

- Render
- Railway
- Heroku

Frontend

- Vercel
- Netlify

Database

- PostgreSQL

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```
git checkout -b feature/new-feature
```

3. Commit your changes

```
git commit -m "Added new feature"
```

4. Push to GitHub

```
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 📸 Screenshots

Add screenshots here after completing the UI.

Example:

```
screenshots/
    dashboard.png
    invoices.png
    clients.png
    login.png
```

---

## 👨‍💻 Author

**Nomfanelo Vilane**

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Project Goals

- Learn Full Stack Development
- Practice Django REST Framework
- Build Production-Ready APIs
- Implement JWT Authentication
- Create Responsive React Applications
- Demonstrate Clean Architecture
- Showcase Real-World CRUD Operations

---

Made with ❤️ using Django, Django REST Framework, React, and Vite.
