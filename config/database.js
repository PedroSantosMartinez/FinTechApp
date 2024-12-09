import { Sequelize } from 'sequelize';
import 'dotenv/config'; // Load environment variables

// Initialize Sequelize with database connection details from environment variables
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: console.log, // Enable SQL query logging
    }
);

export default sequelize; // Export Sequelize instance for reuse
