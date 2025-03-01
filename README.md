# 🏥 Healthcare Management System API

## 📌 Overview
This is a **Healthcare Management System API** that enables **Patients, Providers (Doctors), and Admins** to manage healthcare data. The system features **User Authentication, Role-Based Access Control (RBAC), and Patient Data Management**.

## 🚀 Features
- **User Registration & Authentication (JWT-based)**
- **Role-Based Access Control (RBAC)** (Admin, Patient, Provider)
- **Patient Profile Management**
- **Health Data Storage (Allergies & Medications)**
- **Provider-Patient Assignment**

## 🏗️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (JSON Web Token)
-**Hashing:** Bcrypt
- **RBAC:** Middleware-based role management

---

## 📥 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/healthcare-api.git
cd healthcare-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a **.env** file in the root directory and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### **4️⃣ Start the Server**
```sh
npm run dev  # Starts the server with nodemon
```

---

## 📌 API Endpoints

### 🔐 **1️⃣ Authentication APIs**
| Method | Endpoint | Description |
|--------|---------|------------|
| **POST** | `/api/auth/register` | Register a new user (Patient/Provider/Admin) |
| **POST** | `/api/auth/login` | Log in a user and get JWT token |
| **POST** | `/api/auth/logout` | Log out user |
| **GET** | `/api/auth/me` | Get logged-in user details |

### 🛡️ **2️⃣ RBAC (Role-Based Access Control) APIs**
| Method | Endpoint | Description |
|--------|---------|------------|
| **POST** | `/api/rbac/assign-role` | Assign a role to a user (Admin Only) |
| **GET** | `/api/rbac/check-role` | Check the role of a user |
| **POST** | `/api/rbac/add-permission` | Add permissions to a role (Admin Only) |
| **GET** | `/api/rbac/get-permissions` | Get role-based permissions |

### 🩺 **3️⃣ Patient APIs**
| Method | Endpoint | Description |
|--------|---------|------------|
| **GET** | `/api/patient/profile` | Fetch the patient's profile |
| **PUT** | `/api/patient/profile` | Update the patient's profile |
| **POST** | `/api/patient/data` | Add patient data |
| **PUT** | `/api/patient/update-health` | Update allergies & medication |
| **GET** | `/api/patient/get-health` | Fetch allergies & medication |

### 👨‍⚕️ **4️⃣ Provider APIs**
| Method | Endpoint | Description |
|--------|---------|------------|
| **POST** | `/api/provider/assign-patient` | Assign a patient to a provider |

---

## 🛠️ API Testing Guide
Use **Postman** or any API client to test the endpoints.

### ✅ **1️⃣ User Registration**
- **POST `/api/auth/register`**
- Headers:
  ```
  Content-Type: application/json
  ```
- Body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "123456",
    "role": "Patient"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "user": { "id": "user123", "name": "John Doe", "email": "john@example.com", "role": "Patient" }
  }
  ```

### ✅ **2️⃣ User Login**
- **POST `/api/auth/login`**
- Body:
  ```json
  {
    "email": "john@example.com",
    "password": "123456"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your_jwt_token_here",
    "user": { "id": "user123", "name": "John Doe", "role": "Patient" }
  }
  ```

### ✅ **3️⃣ Add Patient Data**
- **POST `/api/patient/data`**
- Headers:
  ```
  Authorization: Bearer your_jwt_token_here
  ```
- Body:
  ```json
  {
    "name": "John Doe",
    "age": 30,
    "gender": "Male",
    "allergies": ["Peanuts", "Dust"],
    "currentMedication": ["Paracetamol"]
  }
  ```
- **Response:**
  ```json
  {
    "message": "Patient data added successfully",
    "patient": { "id": "patient123", "name": "John Doe", "age": 30 }
  }
  ```

### ✅ **4️⃣ Update Allergies & Medications**
- **PUT `/api/patient/update-health`**
- Headers:
  ```
  Authorization: Bearer your_jwt_token_here
  ```
- Body:
  ```json
  {
    "allergies": ["Pollen"],
    "currentMedication": ["Ibuprofen"]
  }
  ```
- **Response:**
  ```json
  {
    "message": "Health data updated successfully"
  }
  ```

---

## ⚡ Future Improvements
- **Doctor-Patient Chat System**
- **Appointment Scheduling**
- **Prescription Management**
- **Health Report Generation**

## 👨‍💻 Contributors
    Siddhant 
    Bharath
    Amit
    Aman

## 📜 License
No license , its a hackathon project

---

> **Developed with ❤️ by [Siddhant / Bharath / Amit/ Aman]**

