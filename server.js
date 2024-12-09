import express from 'express';
import sequelize from './config/database.js';
import routes from './routes/index.js';
import dotenv from 'dotenv';
dotenv.config();

// Initialize Express app
const app = express(); 

// Test database connection
sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error connecting to database:', err));

// Sync models with the database
sequelize.sync({ force: false }) // `force: true` drops and recreates the tables
    .then(() => console.log('Models synchronized'))
    .catch(err => console.error('Error synchronizing models:', err));

// Set up routes
app.use('/', routes);

// Basic route to handle root endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!');
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});