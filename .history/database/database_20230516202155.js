import mongoose from "mongoose";
mongoose.set('strictQuery',true)
async function connect(){
    try{
        let connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('connect mongoose successfully')
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
