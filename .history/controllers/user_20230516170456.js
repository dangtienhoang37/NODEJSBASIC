import {body,validationResult } from 'express-validator'
import {
    studentRepository,
    userRepository
} from '../repositories/index.js'
const login = async(req,res) => {
    
        //email- pass
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {email, password} = req.body
        //call repository
        await userRepository.login({email,password})
        res.status(200).json({
            message: 'login user successfully',
            data:"detail user here"
        })
        // res.send('Post login user')
}

const register = async(req,res) => {
    //destructuring
    const {
        
            name,
            email, 
            password,
            phoneNumber,
            address
        
    } = req.body
    await userRepository.register({name, email,password,phoneNumber,address})
    res.status(201).json({
        message:'register user sucessfully'
    });
}

const getDetailUser = async (req,res) =>{
    res.send('get user')
}

export default {
    login,
    register,
    getDetailUser
}