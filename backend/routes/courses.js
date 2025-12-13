const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get courses by type (ug/pg)
router.get('/type/:type', async (req, res) => {
    try {
        const courses = await Course.find({ type: req.params.type });
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create course
router.post('/', async (req, res) => {
    const course = new Course({
        type: req.body.type,
        name: req.body.name,
        fullName: req.body.fullName,
        icon: req.body.icon,
        color: req.body.color,
        description: req.body.description || ''
    });

    try {
        const newCourse = await course.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update course
router.put('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });

        if (req.body.type) course.type = req.body.type;
        if (req.body.name) course.name = req.body.name;
        if (req.body.fullName) course.fullName = req.body.fullName;
        if (req.body.icon) course.icon = req.body.icon;
        if (req.body.color) course.color = req.body.color;
        if (req.body.description !== undefined) course.description = req.body.description;

        const updatedCourse = await course.save();
        res.json(updatedCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete course
router.delete('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });

        await course.deleteOne();
        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
