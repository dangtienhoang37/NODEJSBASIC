import {body,validationResult } from 'express-validator'
const login = async(req,res) => {
    
        //email- pass
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {email, password} = req.body
        //validation - su dung expressvalidator
        res.status(200).json({
            message: 'login user successfully',
            data:"detail user here"
        })
        res.send('Post login user')
}

const register = async(req,res) => {
    res.send('post register user')
}

const getDetailUser = async (req,res) =>{
    res.send('get user')
}

export default {
    login,
    register,
    getDetailUser
}