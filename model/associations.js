// Import models
import User from './user.js';
import Transaction from './transaction.js'; // Import the models into the module

const models = {
    User,
    Transaction,
};

// Define associations
User.associate(models); // Set associations for User model.
Transaction.associate(models); // Set associations for Transaction model.

// Export the models
export default models;
