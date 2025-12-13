const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (admin panel)
app.use('/admin', express.static('admin'));

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/news', require('./routes/news'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/recruiters', require('./routes/recruiters'));
app.use('/api/stats', require('./routes/stats'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/faculty', require('./routes/faculty'));
app.use('/api/departments', require('./routes/departments'));

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'KVSRIT Backend API',
        version: '1.0.0',
        endpoints: {
            news: '/api/news',
            courses: '/api/courses',
            recruiters: '/api/recruiters',
            stats: '/api/stats',
            contact: '/api/contact',
            faculty: '/api/faculty',
            departments: '/api/departments',
            admin: '/admin'
        }
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Admin panel: http://localhost:${PORT}/admin`);
});
