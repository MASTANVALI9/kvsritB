const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Get all contact submissions
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Submit contact form
router.post('/', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone || '',
        message: req.body.message
    });

    try {
        const newContact = await contact.save();
        res.status(201).json({ message: 'Contact form submitted successfully', data: newContact });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete contact submission
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ message: 'Contact not found' });

        await contact.deleteOne();
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
