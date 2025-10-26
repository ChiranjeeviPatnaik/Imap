# Imap

**Imap** is a full-stack web application with a **Spring Boot backend** and **React frontend**, built using Java 17 and MySQL. This project provides a foundation for building enterprise-level applications with robust backend APIs and a modern frontend interface.  

---

## Features

- Spring Boot backend with REST APIs  
- React frontend with modern UI  
- MySQL database integration  
- Fully configurable via `application.properties` and environment variables  
- Easy local setup and build  

---

## Prerequisites

Before running the project locally, make sure you have:

- [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)  
- [Maven 3.8+](https://maven.apache.org/install.html)  
- [Node.js 18+](https://nodejs.org/en/download/) and npm  
- [MySQL 8+](https://dev.mysql.com/downloads/mysql/)  
- [Git](https://git-scm.com/downloads)  

---

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/ChiranjeeviPatnaik/Imap.git
cd Imap
```

### 2. Configure MySQL

Create a database in MySQL, e.g., imapdb

```
CREATE DATABASE imapdb;
```

Update the database connection in src/main/resources/application.properties:

```
spring.datasource.url=jdbc:mysql://localhost:3306/imapdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

### 3. Build and Run the Application

Build the project using Maven:
```
mvn clean install
```

Run the Spring Boot application:
```
mvn spring-boot:run
```

The backend server will start at http://localhost:8080

### 3. Frontend Setup (React)

Navigate to frontend folder (assuming it is frontend/):
```
cd app
```

Install dependencies:
```
npm install
```

Start the React application:
```
npm run dev
```
The frontend will start at http://localhost:3000
 and will communicate with the backend APIs.

Make sure the backend is running before starting the frontend.

###  Contributing

  1. Fork the repository

  2. Create a feature branch: git checkout -b feature/YourFeature

  3. Commit your changes: git commit -m 'Add some feature'

  4. Push to branch: git push origin feature/YourFeature

  5. Create a Pull Request
