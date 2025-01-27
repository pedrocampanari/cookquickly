const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const { DeskSchema } = require('../../database/models/schemas');
const Desk = mongoose.model('Desks', DeskSchema);

router.get('/getAllDesks', async (req, res) => {
    try {
        await Desk.find().then(desks => {
            res.json([{num: '01', status: true}, {num: '01', status: true},{num: '01', status: true},{num: '01', status: true},{num: '01', status: true},{num: '01', status: true}]);
        }).catch(err => {
            res.status(500).json({ message: 'Error fetching desks' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching desks' });
    }
});

router.post('/createDesk', async (req, res) => {
    try {
        const desk = new Desk(req.body);
        await desk.save().then(desk => {
            res.json([desk]);
        }).catch(err => {
            res.status(500).json({ message: 'Error creating desk' });
        });
    } catch (err) {
        res.status(500).json({ message: 'Error creating desk' });
    }
});

router.put('/updateDesk', async (req, res) => {
    try {
        const desk = await Desk.findByIdAndUpdate(req.body.id, req.body, { new: true });
        res.json(desk);
    } catch (error) {
        res.status(500).json({ message: 'Error updating desk' });
    }
});

router.delete('/deleteDesk', async (req, res) => {
    try {
        const deskDeleted = await Desk.findByIdAndRemove(req.body.id);
        res.json(deskDeleted);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting desk' });
    }
});


module.exports = router;