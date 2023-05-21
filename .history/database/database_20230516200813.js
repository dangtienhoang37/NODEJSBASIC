import mongoose from "mongoose";

async function connect(){
    try{
        let connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('connect mongoose successfully')
        return connection
    } catch(err){
        // let errMess = err.code
        debugger
        throw new Error('cant not connect MGDB')
    }
}
export default connect
