const express = require('express');
const router = express.Router();

//Login Page
router.get('/login', (req, res) => res.render('login'));

//Register Page
router.get('/register', (req, res) => res.render('register'));

//Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    //Check required fields
    if(!name || !email || !password || !password2 ) {
        errors.push({ msg: 'Please enter all fields '});
    }

    //Check if passwords match
    if(password !== password2) {
        errors.push({ msg: 'Passwords do not match '});
    }

    //Check password length
    if(password.len < 6) {
        errors.push({ msg: 'Password must be at least 6 characters'});
    }
});

module.exports = router;