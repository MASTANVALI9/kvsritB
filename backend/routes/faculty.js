const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

// GET all faculty (with optional department filter)
router.get('/', async (req, res) => {
    try {
        const { department, active } = req.query;
        let query = {};

        if (department) {
            query.department = department;
        }

        if (active !== undefined) {
            query.isActive = active === 'true';
        }

        const faculty = await Faculty.find(query).sort({ order: 1, name: 1 });
        res.json(faculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single faculty member
router.get('/:id', async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);
        if (!faculty) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }
        res.json(faculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST new faculty member
router.post('/', async (req, res) => {
    const faculty = new Faculty(req.body);

    try {
        const newFaculty = await faculty.save();
        res.status(201).json(newFaculty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update faculty member
router.put('/:id', async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);
        if (!faculty) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }

        Object.assign(faculty, req.body);
        const updatedFaculty = await faculty.save();
        res.json(updatedFaculty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE faculty member
router.delete('/:id', async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);
        if (!faculty) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }

        await faculty.deleteOne();
        res.json({ message: 'Faculty member deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
