# UberClone Backend Documentation

## Project Structure
```
Backend/
├── app.js                # Express app configuration
├── server.js            # Server startup
├── db/
│   └── db.js           # Database connection
├── models/
│   ├── user.model.js   # User schema and methods
│   └── blacklistToken.model.js # Token blacklist for logout
├── services/
│   └── user.service.js # Business logic
├── controllers/
│   └── user.controller.js # Request handlers
├── middleware/
│   └── auth.middleware.js # Authentication middleware
└── routes/
    └── user.routes.js  # API routes
```

## API Documentation

### 1. Register User
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

### 2. Login User
`POST /users/login`

Authenticates a user and returns a token.

#### Request Body
```json
{
  "email": "string",    // Required
  "password": "string"  // Required
}
```

#### Success Response
**Status Code:** `200 OK`
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

### 3. Get User Profile
`GET /users/profile`

Returns the profile of the authenticated user.

#### Headers
```
Authorization: Bearer <token>
```

#### Success Response
**Status Code:** `200 OK`
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com"
}
```

### 4. Logout User
`GET /users/logout`

Logs out the user and invalidates the token.

#### Headers
```
Authorization: Bearer <token>
```

#### Success Response
**Status Code:** `200 OK`
```json
{
  "message": "Logged out"
}
```

## Error Responses

### Validation Error
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

### Authentication Error
**Status Code:** `401 Unauthorized`
```json
{
  "message": "Unauthorized"
}
```

### Invalid Credentials
**Status Code:** `401 Unauthorized`
```json
{
  "message": "invalid email and password"
}
```

## Implementation Details

### Models

#### User Schema
```javascript
{
  firstname: {
    type: String,
    required: true,
    minlength: [3, 'name should be at least 3 characters']
  },
  lastname: {
    type: String,
    minlength: [3, 'name should be at least 3 characters']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'email should be at least 5 characters']
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: [8, 'password should be at least 8 characters']
  },
  socketid: {
    type: String
  }
}
```

#### BlacklistToken Schema
```javascript
{
  token: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 // 24 hours in seconds
  }
}
```

### Security Features
- Passwords are hashed using bcrypt before storage
- JWT tokens with 24-hour expiration
- Token blacklisting for logout
- Password field excluded from queries
- Email uniqueness enforced
- CORS enabled
- Request body validation

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