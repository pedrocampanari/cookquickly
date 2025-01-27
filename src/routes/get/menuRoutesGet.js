const path = require('path');
const express = require('express');
const router = express.Router();

//orders
router.get('/orders', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '../', '../', 'public', 'html', 'orders.html'));
});

//delivery
router.get('/delivery', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '../', '../', 'public', 'html', 'delivery.html'));
});

//desks
router.get('/desks', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '../', '../', 'public', 'html', 'desks.html'));
});

//sales
router.get('/sales', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '../', '../', 'public', 'html', 'sales.html'));
});

//menu
router.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '../', '../', 'public', 'html', 'menu.html'));
});

//dashboard
router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '../', '../', 'public', 'html', 'dashboard.html'));

});

//settings
router.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '../', '../', 'public', 'html', 'settings.html'));

});

module.exports = router;