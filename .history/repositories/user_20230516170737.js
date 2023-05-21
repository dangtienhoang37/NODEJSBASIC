const login = async ({email, password}) => {
    console.log('login user in user repo haha')
}
const register = async ({
    name,
    password,
    email, 
    
    phoneNumber,
    address
}) => {
    //validation already done
    console.log('register user with: name: '+ name +' email: '+email +' password: '+ password + ' phone: '+ phoneNumber + ' address: ' + address)
}

export default {
    login,
    register
}