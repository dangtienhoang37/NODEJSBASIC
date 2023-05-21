import {print,OutputType} from '../helpers/print.js'
import {User} from '../models/index.js'
import Exception from '../error/Exception.js'
import bcrypt from 'bcrypt'
import { parse } from 'dotenv'

const login = async ({email, password}) => {
    // console.log('login user in user repo haha')
    print('login user in user repo haha',OutputType.INFORMATION)
}
const register = async ({
    name,
    email, 
    password,
    phoneNumber,
    address
}) => {
    //validation already done
    try{
        let existingUser = await User.findOne({email}).exec()
        if(!!existingUser) {//check not null
            throw new Exception(Exception.USER_EXIST)
        } 
        //encrypt password, use bcrypt
        //use for login
        // const isMatch = await bcrypt.compare(password,existingUser.password)
        // if(isMatch){

        // }
        const hashPassword = await bcrypt.hash(password,parseInt(process.env.SALT_ROUNDS))
        //insert to DB
        const newUser = await User.create({
            name,
            email,
            password: hashPassword,
            phoneNumber,
            address
        })
        return newUser

    }catch(exception){
        //check model validation
    }
    // print('register user with: name: '+ name +' email: '+email +' password: '+ password + ' phone: '+ phoneNumber + ' address: ' + address,OutputType.INFORMATION)
}

export default {
    login,
    register
}