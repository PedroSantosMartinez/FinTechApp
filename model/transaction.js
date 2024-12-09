import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.js'; // Import the User model to complete key references

// Define the Transaction model
const Transaction = sequelize.define("Transaction", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "user_id",
            },
            onDelete: "CASCADE",
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM("credit", "debit"),
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        status: {
            type: DataTypes.ENUM("pending", "complete", "denied"),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    }, {
        modelName: "Transaction",
        tableName: "transactions",
        timestamps: true, // Automatically add createAt and updateAt timestamps
    }
); // Associate
Transaction.associate = (models) => {
    Transaction.belongsTo(models.User, {
        foreignKey: 'user_id', // Foreign key linking transactions back to the User
        as: 'user', // Alias for the association 
    });
};

// Export the models
export default Transaction;