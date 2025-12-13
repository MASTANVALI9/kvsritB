const express = require('express');
const router = express.Router();
const Recruiter = require('../models/Recruiter');

// Get all recruiters
router.get('/', async (req, res) => {
    try {
        const recruiters = await Recruiter.find().sort({ order: 1 });
        res.json(recruiters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create recruiter
router.post('/', async (req, res) => {
    const recruiter = new Recruiter({
        name: req.body.name,
        logo: req.body.logo,
        order: req.body.order || 0
    });

    try {
        const newRecruiter = await recruiter.save();
        res.status(201).json(newRecruiter);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update recruiter
router.put('/:id', async (req, res) => {
    try {
        const recruiter = await Recruiter.findById(req.params.id);
        if (!recruiter) return res.status(404).json({ message: 'Recruiter not found' });

        if (req.body.name) recruiter.name = req.body.name;
        if (req.body.logo) recruiter.logo = req.body.logo;
        if (req.body.order !== undefined) recruiter.order = req.body.order;

        const updatedRecruiter = await recruiter.save();
        res.json(updatedRecruiter);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete recruiter
router.delete('/:id', async (req, res) => {
    try {
        const recruiter = await Recruiter.findById(req.params.id);
        if (!recruiter) return res.status(404).json({ message: 'Recruiter not found' });

        await recruiter.deleteOne();
        res.json({ message: 'Recruiter deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
