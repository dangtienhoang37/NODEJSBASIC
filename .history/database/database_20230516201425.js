import mongoose from "mongoose";

async function connect(){
    try{
        let connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('connect mongoose successfully')
        return connection
    } catch(error){
        // let errMess = err.code
        if(error.code = 8000){
            throw new Error("wrong username or password")
        }
        debugger
        throw new Error('cant not connect MGDB')
    }
}
export default connect
