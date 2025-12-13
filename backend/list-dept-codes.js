const mongoose = require('mongoose');
const Department = require('./models/Department');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('Connected to MongoDB');
        const departments = await Department.find({}, 'name code');
        console.log('Departments found:');
        departments.forEach(d => console.log(`${d.name} (${d.code})`));
        mongoose.connection.close();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
