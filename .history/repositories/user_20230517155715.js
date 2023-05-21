import {print,OutputType} from '../helpers/print.js'
import {User} from '../models/index.js'
import Exception from '../error/Exception.js'
import bcrypt, { compare } from 'bcrypt'
import  jwt  from 'jsonwebtoken'
import { parse } from 'dotenv'

const login = async ({email, password}) => {
    
    // print('login user in user repo haha',OutputType.INFORMATION)
    let existingUser = await User.findOne({email}).exec()
    if(existingUser){
        //not encrypt password
        let isMatch = await bcrypt.compare(password, existingUser.password)
        if(!!isMatch){
            //create json web token
            let token = jwt.sign({
                    data: existingUser
                    }, 
                process.env.JWT_SECRET,{
                    // expiresIn: '60' //1min
                    expiresIn: '10 days' 

                }
            )
            existingUser.token = token

        }else{
            throw new Exception(Exception.WRONG_EMAIL_OR_PASSWORD)
        }
    }
    else {
        throw new Exception(Exception.WRONG_EMAIL_OR_PASSWORD)

    }
}
const register = async ({
    name,
    email, 
    password,
    phoneNumber,
    address
}) => {
    //validation already done
    

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
        return {
            ...newUser._doc,
            password: 'not show'
        }
    // print('register user with: name: '+ name +' email: '+email +' password: '+ password + ' phone: '+ phoneNumber + ' address: ' + address,OutputType.INFORMATION)
}

export default {
    login,
    register
}