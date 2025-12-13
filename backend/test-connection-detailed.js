const mongoose = require('mongoose');
require('dotenv').config();

console.log('Testing MongoDB connection...');
console.log('Connection string:', process.env.MONGO_URI.replace(/:[^:]*@/, ':****@'));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB connected successfully!');
        console.log('Database:', mongoose.connection.db.databaseName);

        // List collections
        mongoose.connection.db.listCollections().toArray()
            .then(collections => {
                console.log('\nExisting collections:');
                collections.forEach(c => console.log('  -', c.name));
                process.exit(0);
            })
            .catch(err => {
                console.error('Error listing collections:', err.message);
                process.exit(1);
            });
    })
    .catch(err => {
        console.error('❌ MongoDB connection failed:', err.message);
        process.exit(1);
    });
