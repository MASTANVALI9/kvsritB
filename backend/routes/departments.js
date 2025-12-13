const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

// GET all departments
router.get('/', async (req, res) => {
    try {
        const departments = await Department.find({ isActive: true })
            .sort({ order: 1, name: 1 });
        res.json(departments);
    } catch (error) {
        console.error('Error fetching departments:', error);
        res.status(500).json({ message: 'Error fetching departments', error: error.message });
    }
});

// GET department by ID
router.get('/:id', async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json(department);
    } catch (error) {
        console.error('Error fetching department:', error);
        res.status(500).json({ message: 'Error fetching department', error: error.message });
    }
});

// GET department by code
router.get('/code/:code', async (req, res) => {
    try {
        const department = await Department.findOne({
            code: req.params.code.toUpperCase(),
            isActive: true
        });
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json(department);
    } catch (error) {
        console.error('Error fetching department:', error);
        res.status(500).json({ message: 'Error fetching department', error: error.message });
    }
});

// POST create new department (admin)
router.post('/', async (req, res) => {
    try {
        const department = new Department(req.body);
        await department.save();
        res.status(201).json(department);
    } catch (error) {
        console.error('Error creating department:', error);
        res.status(400).json({ message: 'Error creating department', error: error.message });
    }
});

// PUT update department (admin)
router.put('/:id', async (req, res) => {
    try {
        const department = await Department.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json(department);
    } catch (error) {
        console.error('Error updating department:', error);
        res.status(400).json({ message: 'Error updating department', error: error.message });
    }
});

// DELETE department (admin)
router.delete('/:id', async (req, res) => {
    try {
        const department = await Department.findByIdAndDelete(req.params.id);
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json({ message: 'Department deleted successfully' });
    } catch (error) {
        console.error('Error deleting department:', error);
        res.status(500).json({ message: 'Error deleting department', error: error.message });
    }
});

module.exports = router;
