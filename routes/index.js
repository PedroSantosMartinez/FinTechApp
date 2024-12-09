import express from 'express';
import Transaction from '../model/transaction.js'; // Import the Transaction model
import User from '../model/user.js'; // Import the User model

const router = express.Router(); // Create an Express router

// Route to display all users
router.get('/', async (req, res) => {
    try {
        // Directly fetch all users data from the database
        const data = await User.findAll(); // Example: Fetch all users
        res.render('dashboard', { data }); // Render the 'dashboard' view with the fetched data
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error'); // Handle errors
    }
});

// Route to display all transactions
router.get('/transactions', async (req, res) => {
    try {
        // Directly fetch all transactions from the database
        const transactions = await Transaction.findAll();
        res.render('transactions', { transactions }); // Render the 'transactions' view with fetched transactions
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error'); // Handle errors
    }
});

// Export the models
export default router;