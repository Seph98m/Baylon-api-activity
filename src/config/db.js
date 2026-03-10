
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Check if MONGO_URI is defined
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in .env file');
        }

        console.log('Attempting to connect to MongoDB...');
        console.log(`Using URI: ${process.env.MONGO_URI.substring(0, 50)}...`);

        //this tries to connect using Key in your .env file
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
            retryWrites: true,
            w: 'majority'
        });

        //if successful, it prints the host name
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // If fails, it shows the error and stops the server
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        console.error('\n⚠️  Common fixes:');
        console.error('1. Add your IP address to MongoDB Atlas Network Access');
        console.error('2. Check your MONGO_URI in .env file');
        console.error('3. Verify username and password are correct');
        console.error('4. Allow 0.0.0.0/0 in MongoDB Atlas for testing\n');
        process.exit(1);
    }
};

module.exports = connectDB;