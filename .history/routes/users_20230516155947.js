import express from 'express'
const {body,validationResult } = require('express-validator')
const router = express.Router()

router.get('/',(req,res) =>{
    res.send('get user')
})
router.post('/login',(req,res) =>{
    //email- pass
    
    const {email, password} = req.body
    //validation - su dung expressvalidator
    debugger
    res.send('Post login user')
})

router.post('/register',(req,res) =>{
    res.send('post register user')
})

export default router