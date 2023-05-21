import { print,
OutputType
} from "../helpers/print.js"
export default class Exception extends Error {
    static WRONG_DB_USERNAME_PASSWORD = "Wrong database name or password"
    static WRONG_CONNECTION_STRING = "wrong server name/ connection string"
    static CANNOT_CONNECT_MGDB= 'cant not connect MGDB'
    constructor(message){
        super(message) //call method constructer of parent class(Error)
        print(message,OutputType.ERROR)
    }
}