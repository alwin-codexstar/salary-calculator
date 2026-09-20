# 💰 Salary Calculator Web App

A responsive and user-friendly **Salary Calculator Web App** built with **HTML, CSS, and JavaScript**. The application provides separate salary calculation options for employees **with ESI** and employees **without ESI**, including PF-based calculations.

## 📌 Project Overview

The Salary Calculator helps calculate an employee's estimated payable salary based on salary, working days, LOP deductions, ESI, PF, and other applicable deductions.

The application provides two dedicated calculation options:

### 🏥 Employees With ESI

This option is designed for employees whose salary calculation includes **ESI deductions**.

It can include:

* Employee name
* Total salary
* Number of working days
* LOP deduction
* ESI calculation
* Calculated payable salary

### 🏦 Employees Without ESI – PF Calculation

This option is designed for employees who are **not covered under ESI** and whose salary calculation includes **PF deductions**.

It can include:

* Employee name
* Total salary
* Number of working days
* LOP deduction
* PF calculation
* Other applicable deductions
* Calculated payable salary

## 🌐 Live Demo

**GitHub Pages:**
`https://alwin-codexstar.github.io/salary-calculator/`

## ✨ Features

* 👤 Employee details
* 💰 Total salary calculation
* 📅 Working days input
* ➖ LOP deduction
* 🏥 ESI calculation for applicable employees
* 🏦 PF calculation for employees without ESI
* 🔄 Separate **With ESI** and **Without ESI – PF Calculation** options
* 🧮 Automatic salary calculation
* ⚡ Instant calculation using JavaScript
* 📱 Responsive design
* 💻 Desktop, tablet, and mobile support
* 🎨 Clean and simple user interface

## 🧮 Salary Calculation

The application calculates the estimated payable salary based on the selected employee category and applicable deductions.

### Employees With ESI

```text
Payable Salary =
Salary - LOP Deduction - ESI - Other Applicable Deductions
```

### Employees Without ESI

```text
Payable Salary =
Salary - LOP Deduction - PF - Other Applicable Deductions
```

> **Note:** The exact calculation depends on the formulas and percentages configured in the application.

## 🛠️ Technologies Used

| Technology | Purpose                               |
| ---------- | ------------------------------------- |
| HTML5      | Web page structure                    |
| CSS3       | Styling and responsive design         |
| JavaScript | Salary calculations and functionality |

## 📂 Project Structure

```text
salary-calculator-web-app/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

## ⚙️ How to Use

1. Open the Salary Calculator.
2. Enter the employee details.
3. Enter the total salary.
4. Enter the number of working days.
5. Enter LOP deduction if applicable.
6. Select the appropriate employee category:

   * **With ESI**
   * **Without ESI – PF Calculation**
7. Enter the required deduction details.
8. Click the calculate button.
9. View the estimated payable salary.

## 🏥 ESI Employee Calculation

For employees covered under the ESI option, the application calculates the applicable ESI deduction based on the configured percentage.

The project supports an **ESI employee contribution of 0.75%**, where applicable.

## 🏦 PF Employee Calculation

For employees without ESI, the application provides a **PF-based salary calculation**.

The PF calculation can be configured according to the salary structure and percentage used by the application.

> **Important:** Actual ESI and PF deductions can depend on applicable statutory rules, eligibility, wage components, company policies, and other payroll conditions. This project is intended for estimation and demonstration purposes.

## 📱 Responsive Design

The application is designed for:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📲 Tablet

## 🔮 Future Enhancements

* Employee database
* PHP backend
* MySQL integration
* Employee login and authentication
* Admin dashboard
* Employee salary history
* Monthly payroll management
* Payslip generation
* PDF download
* Excel export
* Salary reports
* Payroll analytics
* Cloud deployment

## 🎯 Project Purpose

This project demonstrates practical skills in:

* Front-end web development
* HTML5
* CSS3
* JavaScript
* Form handling
* Salary calculations
* Payroll calculation logic
* Responsive web design
* Git and GitHub

## 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

## 👨‍💻 Author

**Alwin**

GitHub:
`https://github.com/alwin-codexstar`

---

⭐ If you find this project useful, consider giving the repository a **star**!
