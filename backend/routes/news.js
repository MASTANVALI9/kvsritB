const express = require('express');
const router = express.Router();
const News = require('../models/News');

// Get all news
router.get('/', async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get news by category
router.get('/:category', async (req, res) => {
    try {
        const news = await News.find({ category: req.params.category }).sort({ createdAt: -1 });
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create news
router.post('/', async (req, res) => {
    const news = new News({
        category: req.body.category,
        date: req.body.date,
        title: req.body.title,
        link: req.body.link || '#'
    });

    try {
        const newNews = await news.save();
        res.status(201).json(newNews);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update news
router.put('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ message: 'News not found' });

        if (req.body.category) news.category = req.body.category;
        if (req.body.date) news.date = req.body.date;
        if (req.body.title) news.title = req.body.title;
        if (req.body.link) news.link = req.body.link;

        const updatedNews = await news.save();
        res.json(updatedNews);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete news
router.delete('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ message: 'News not found' });

        await news.deleteOne();
        res.json({ message: 'News deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
