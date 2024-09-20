
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const Database = require('better-sqlite3');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173' 
}));
app.use(express.json());
app.use(helmet());

// Initialize SQLite database
const db = new Database('database.db');

// Create users table if it doesn't exist
const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`;
db.exec(createUsersTable);

// Define Joi schema for registration
const registrationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(), // Enforce minimum password length
});

// Registration Endpoint
app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input using Joi
        const { error } = registrationSchema.validate({ email, password });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Check if the email already exists
        const userExists = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
        if (userExists) {
            return res.status(409).json({ message: 'Email is already registered.' });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert the new user into the database
        const insert = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
        const result = insert.run(email, hashedPassword);

        // Respond with success
        res.status(201).json({ message: 'User registered successfully.', userId: result.lastInsertRowid });
    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// Define Joi schema for login
const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

// Login Endpoint
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input using Joi
        const { error } = loginSchema.validate({ email, password });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Check if the user exists
        const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Respond with success
        res.status(200).json({ message: 'Login successful.', userId: user.id });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});



// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
