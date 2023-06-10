const express = require('express');
const router = express.Router();

router.get('/home', (req, res)=>{
    res.render('home');
});

router.get('/send', (req, res)=>{
    res.render('form');
});

router.get('/admin', (req, res)=>{
    res.send('admin');
});

router.get('/id', (req, res)=>{
    const id = req.params.id;
    res.send(id);
});


module.exports = router;