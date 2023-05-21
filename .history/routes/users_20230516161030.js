import express from 'express'
// const {body,validationResult } = require('express-validator')
import {body,validationResult } from 'express-validator'
const router = express.Router()

router.get('/',(req,res) =>{
    res.send('get user')
})
router.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min : 5}),
    (req,res) =>{
    //email- pass
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body
    //validation - su dung expressvalidator
    
    res.send('Post login user')
})

router.post('/register',(req,res) =>{
    res.send('post register user')
})

export default router