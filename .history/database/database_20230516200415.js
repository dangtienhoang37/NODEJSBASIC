import mongoose, { connection } from "mongoose";

async function connect(){
    try{
        let connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('connect mongoose successfully')
    } catch(err){
        // let errMess = err.code
        debugger
        throw new Error('cant not connect MGDB')
    }
}
export default connect