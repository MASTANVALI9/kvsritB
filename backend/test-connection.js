const mongoose = require('mongoose');
require('dotenv').config();

console.log('MONGO_URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB connected successfully!');
        console.log('Database:', mongoose.connection.name);
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('❌ Connection error:', err.message);
        process.exit(1);
    });
