# UberClone Backend Documentation

## Project Structure
```
Backend/
├── app.js                # Express app configuration
├── server.js            # Server startup
├── db/
│   └── db.js           # Database connection
├── models/
│   └── user.model.js   # User schema and methods
├── services/
│   └── user.service.js # Business logic
├── controllers/
│   └── user.controller.js # Request handlers
└── routes/
    └── user.routes.js  # API routes
```

## API Documentation

### Register User
`POST /users/register`

Creates a new user account with the provided information.

#### Request Body
```json
{
  "fullname": {
    "firstname": "string", // Required, min 3 chars
    "lastname": "string"   // Optional, min 3 chars
  },
  "email": "string",      // Required, unique email
  "password": "string"    // Required, min 6 chars
}
```

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secure123"
}
```

#### Success Response
**Status Code:** `201 Created`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}
```

#### Error Responses

1. **Validation Error**  
   **Status Code:** `400 Bad Request`
   ```json
   {
     "errors": [
       {
         "msg": "invalid email format",
         "param": "email",
         "location": "body"
       }
     ]
   }
   ```

2. **Missing Fields**  
   **Status Code:** `400 Bad Request`
   ```json
   {
     "errors": [
       {
         "msg": "All fields are required"
       }
     ]
   }
   ```

## Implementation Details

### User Schema
```javascript
{
  firstname: {
    type: String,
    required: true,
    minlength: 3
  },
  lastname: {
    type: String,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: 8
  },
  socketid: {
    type: String
  }
}
```

### Validation Rules
- **firstname**: Required, minimum 3 characters
- **lastname**: Optional, minimum 3 characters if provided
- **email**: Required, must be valid email format and unique
- **password**: Required, minimum 6 characters

### Security Features
- Passwords are hashed using bcrypt before storage
- JWT tokens generated for authentication
- Password field excluded from query results
- Email uniqueness enforced at database level

### Database Connection
- MongoDB connection using Mongoose
- Connection status logged to console
- Environment variables used for connection string

## Running the Server

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
node server.js
```

Server will run at `http://localhost:3000`

### Server Output
- Success: `✅ Connected to MongoDB`
- Error: `❌ MongoDB connection error: [error details]`