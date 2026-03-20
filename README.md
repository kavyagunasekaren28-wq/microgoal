# 🎯 MicroGoal - Backend API Demo

### 📺 Backend Demo
*Watch the video below to see the JWT Authentication and CRUD operations in action using Thunder Client:*

https://github.com/user-attachments/assets/77d6a250-5722-4195-866c-2d84d04430e3


**MicroGoal** is a robust Node.js backend application designed to demonstrate a complete RESTful API workflow. It features secure user authentication, JWT-protected routes, and full CRUD (Create, Read, Update, Delete) functionality integrated with a MongoDB Atlas cloud database.

## 🌟 Technical Highlights
* **Secure Authentication**: Implements `bcryptjs` for password hashing and **JSON Web Tokens (JWT)** for stateless session management.
* **Environment Security**: Sensitive credentials (like the MongoDB connection string) are managed via `.env` files and kept out of the source code.
* **Modular Architecture**: Follows the **MVC (Model-View-Controller)** pattern for clean, scalable, and maintainable code.
* **Cloud Integration**: Fully connected to a **MongoDB Atlas** cluster using Mongoose ODM.

---

## 🛠️ Tech Stack
* **Runtime**: Node.js
* **Framework**: Express.js
* **Database**: MongoDB Atlas
* **Security**: JWT, Bcryptjs
* **Validation**: Joi (Request body validation)



---

## 📁 Project Structure
```text
├── Middlewares/     # Auth protection and global error handling
├── Model/           # Mongoose Schemas (User and Goal)
├── Router/          # API Route definitions (Auth & Goals)
├── utills/          # Token generation and helper functions
├── .env.example     # Template for required environment variables
├── .gitignore       # Ensures node_modules and .env are not tracked
└── index.js         # Entry point and server configuration
```


---

## 🚦 API Reference

### Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/signup` | Create a new user account |
| **POST** | `/login` | Authenticate and receive a Bearer Token |

### Goal Management (Protected)
*Requires a valid JWT in the Authorization header.*

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/create` | Create goals for the user |
| **GET** | `/:id` | Gets the '_id' for user |
| **PUT** | `/:id` | Update goal status or content |
| **DELETE** | `/:id` | Permanently delete a goal |



---

## 🧪 Demonstration Workflow

To verify the functionality as shown in the demo video, follow these steps in order:

1.  **Start the Server**: Run `npm start` and confirm the `MongoDB Connected` message appears in your terminal.
2.  **User Registration**: Use Thunder Client to send a **POST** request to `/signup` with a name, email, and password.
3.  **Authentication**: Send a **POST** request to `/login`. Copy the `token` from the JSON response.
4.  **Authorize**: In your next request (e.g., `/add-goal`), go to the **Auth** tab in Thunder Client, select **Bearer Token**, and paste your token.
5.  **CRUD Operations**: 
    * **Create**: Add a new goal.
    * **Update**: Change the `completed` status of a goal using its `_id`.
    * **Delete**: Remove the goal to clean up the database.
6.  **Verify**: Refresh your **MongoDB Atlas** dashboard between steps to see the data changes in real-time.

---

## 🛡️ Security Best Practices
As a demonstration of backend security, this project:
* **Hides Credentials**: Uses `.env` to keep the `MONGO_URL` and `JWT_SECRET` out of the source code.
* **Protects Routes**: Uses a custom middleware to verify JWTs before allowing access to goal data.
* **Secure Storage**: Uses `bcryptjs` to ensure user passwords are never stored in plain text.
