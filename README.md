# **Notely - Backend**  
This is the backend for Notely, a simple note-taking platform built with Node.js, Express, and Prisma.  
This project is developed by **Group 2** from **Bootcamp Kilat GDGoC UG 2025**.  

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

## API Endpoints  

### Authentication  
| Method | Endpoint            | Description                  |
|--------|--------------------|------------------------------|
| POST   | `/api/auth/signin` | Register a new user         |
| POST   | `/api/auth/signup`    | Log in a user and get a token |

### Notes  
| Method  | Endpoint         | Description           |
|---------|-----------------|-----------------------|
| GET     | `/api/notes`     | Get all notes        |
| GET     | `/api/notes/:id` | Get a note by ID     |
| POST    | `/api/notes`     | Create a new note    |
| PUT     | `/api/notes/:id` | Update a note by ID  |
| DELETE  | `/api/notes/:id` | Delete a note by ID  |


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

## 3. Set Up Environment Variables
Create a .env file in the root directory and add the necessary variables as per the documentation.

## 4. Run Database Migrations
```bash
npx prisma migrate dev
```
## 5. Start the Server
```bash
npm run dev
```
