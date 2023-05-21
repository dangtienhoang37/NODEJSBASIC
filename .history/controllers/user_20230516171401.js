import {body,
    validationResult 
} from 'express-validator'
import {
    studentRepository,
    userRepository
} from '../repositories/index.js'
import {EventEmitter} from 'node:events'

const myEvent = new EventEmitter()
myEvent.on('event.register.user',(params)=>{
    //listen
    console.log(`they talk about:${JSON.stringify(params)}`)
})
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
    await userRepository.register({
        name, 
        email,
        password,
        phoneNumber,
        address
    })

    //event emmiter: khi co su kien say ra, can thong bao cho cac func biet
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