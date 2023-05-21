import express from 'express'
import {
    userController,
    studentController,
} from '../controllers/index.js'
// const {body,validationResult } = require('express-validator')
import {body,validationResult } from 'express-validator'
const router = express.Router()

router.get('/',(req,res) =>{
    res.send('get user')
})
router.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min : 5}),
    userController.login
)

router.post('/register',(req,res) =>{
    // res.send('post register user')
    userController.register
})

export default router