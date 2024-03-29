const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('Successfully Established Connection with MongoDB');
    } catch (error) {
        console.log(
            `Failed to Establish Connection with MongoDB with Error: ${error}`,
        );
    }
};

connect();

module.exports = mongoose;