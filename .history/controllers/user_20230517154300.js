import {body,
    validationResult 
} from 'express-validator'
import HttpStatusCode from '../error/HttpStatusCode.js'

import {
    studentRepository,
    userRepository
} from '../repositories/index.js'
import {EventEmitter} from 'node:events'
import Exception from '../error/Exception.js'

const myEvent = new EventEmitter()
myEvent.on('event.register.user',(params)=>{
    //listen
    console.log(`they talk about:${JSON.stringify(params)}`)
})
const login = async(req,res) => {
    
        //email- pass
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(HttpStatusCode.BAD_REQUEST).json({ errors: errors.array() });
        }
        const {email, password} = req.body
        //call repository
        try{
        await userRepository.login({email,password})
        res.status(HttpStatusCode.OK).json({
            message: 'login user successfully',
            data:"detail user here"
        })
        } catch(exception) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                message: exception.toString()
            })
        }
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
    

    //event emmiter: khi co su kien say ra, can thong bao cho cac func biet
    myEvent.emit('event.register.user',{email,address,phoneNumber})
    try {
        debugger
        const user = await userRepository.register({
            name, 
            email,
            password,
            phoneNumber,
            address
        })
        res.status(HttpStatusCode.INSERT_OK).json({
            message:'register user sucessfully',
            data: user
        });
    }catch(exception){
        debugger
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
    
}

const getDetailUser = async (req,res) =>{
    res.send('get user')
}

export default {
    login,
    register,
    getDetailUser
}