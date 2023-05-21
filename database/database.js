import mongoose from "mongoose";
import { print, OutputType } from "../helpers/print.js";
import Exception from "../error/Exception.js";
mongoose.set('strictQuery',true)
async function connect(){
    try{
        let connection = await mongoose.connect(process.env.MONGO_URI)
        print('connect mongoose successfully',OutputType.SUCESS)
        return connection
    } catch(error){
        // let errMess = err.code
        // print('connect err',OutputType.ERROR)
        const {code} = error

        // debugger
        if(error.code = 8000){
            
            throw new Exception(Exception.WRONG_DB_USERNAME_PASSWORD)
            
        }else if(code = 'ENOTFOUND'){
            throw new Exception(Exception.WRONG_CONNECTION_STRING)
        }
        throw new Exception(Exception.CANNOT_CONNECT_MGDB)
    }
}
export default connect
