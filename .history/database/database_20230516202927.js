import mongoose from "mongoose";
import { print, OutputType } from "../helpers/print.js";
mongoose.set('strictQuery',true)
async function connect(){
    try{
        let connection = await mongoose.connect(process.env.MONGO_URI)
        print('connect mongoose successfully',OutputType.SUCESS)
        return connection
    } catch(error){
        // let errMess = err.code
        const {code} = error

        debugger
        if(error.code = 8000){
            throw new Error("wrong username or password")
            
        }else if(code = 'ENOTFOUND'){
            throw new error("wrong server name/ connection string")
        }
        throw new Error('cant not connect MGDB')
    }
}
export default connect
