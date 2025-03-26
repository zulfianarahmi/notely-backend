# **Notely - Backend**  
This is the backend for Notely, a simple note-taking platform built with Node.js, Express, and Prisma.  

📌 **Frontend Repository**: [Fe-Notes](https://github.com/vardhaaa/Fe-Notes)  

## **Technologies Used**  
- **Node.js** - JavaScript runtime for the server.  
- **Express** - Web framework for Node.js.  
- **TypeScript** - A superset of JavaScript that adds static typing.  
- **Prisma** - ORM (Object-Relational Mapping) for interacting with the PostgreSQL database.  
- **PostgreSQL** - Relational database management system.  

## **Key Features**  
✅ **Note Management** - CRUD (Create, Read, Update, Delete) for notes.  
✅ **User Authentication** - Registration and login with password hashing and JWT tokens.  
✅ **Data Validation** - Uses Zod for input validation.  
✅ **API Testing** - Endpoints are tested using Postman.  

## **Project Structure**  
```plaintext
📂 prisma/
├── migrations/ # Contains database migrations
├── schema.prisma # Database schema
📂 src/
├── controllers/ # Contains logic for each endpoint
├── middlewares/ # Middleware for validation, authentication, etc.
├── routes/ # Application routing
├── services/ # Service layer for database interaction
├── index.ts # Entry point of the application
📄 .gitignore # Files ignored by Git
📄 LICENSE # Project license information
📄 README.md # Project documentation
📄 package.json # Dependencies and npm scripts
📄 tsconfig.json # TypeScript configuration
📄 vercel.json # Configuration for deployment on Vercel
```

## **How to Run the Backend**  

### **1. Clone the Repository**  
```bash
git clone https://github.com/zulfianarahmi/notely-backend.git
cd notely-backend
```
## 2. Install Dependencies  
```bash
npm install
```
