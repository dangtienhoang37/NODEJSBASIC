import {print,OutputType} from '../helpers/print.js'
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

    }catch(exception){

    }
    // print('register user with: name: '+ name +' email: '+email +' password: '+ password + ' phone: '+ phoneNumber + ' address: ' + address,OutputType.INFORMATION)
}

export default {
    login,
    register
}