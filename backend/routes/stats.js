const express = require('express');
const router = express.Router();
const Stats = require('../models/Stats');

// Get all stats
router.get('/', async (req, res) => {
    try {
        const stats = await Stats.find().sort({ order: 1 });
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create stat
router.post('/', async (req, res) => {
    const stat = new Stats({
        label: req.body.label,
        value: req.body.value,
        icon: req.body.icon || '',
        order: req.body.order || 0
    });

    try {
        const newStat = await stat.save();
        res.status(201).json(newStat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update stat
router.put('/:id', async (req, res) => {
    try {
        const stat = await Stats.findById(req.params.id);
        if (!stat) return res.status(404).json({ message: 'Stat not found' });

        if (req.body.label) stat.label = req.body.label;
        if (req.body.value) stat.value = req.body.value;
        if (req.body.icon !== undefined) stat.icon = req.body.icon;
        if (req.body.order !== undefined) stat.order = req.body.order;

        const updatedStat = await stat.save();
        res.json(updatedStat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete stat
router.delete('/:id', async (req, res) => {
    try {
        const stat = await Stats.findById(req.params.id);
        if (!stat) return res.status(404).json({ message: 'Stat not found' });

        await stat.deleteOne();
        res.json({ message: 'Stat deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
