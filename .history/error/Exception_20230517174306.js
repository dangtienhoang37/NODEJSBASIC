import { print,
OutputType
} from "../helpers/print.js"
export default class Exception extends Error {
    static WRONG_DB_USERNAME_PASSWORD = "Wrong database name or password"
    static WRONG_CONNECTION_STRING = "wrong server name/ connection string"
    static CANNOT_CONNECT_MGDB= 'cant not connect MGDB'
    static USER_EXIST = "User already exist"
    static CANNOT_REGISTER_USER = "cannot register user"
    static WRONG_EMAIL_OR_PASSWORD = 'Wrong username or Password'

    constructor(message,validationErrors={}){
        super(message) //call method constructer of parent class(Error)
        print(message,OutputType.ERROR)
        this.validationErrors = validationErrors
    }
    
}