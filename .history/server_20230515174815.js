import express from 'express'
import * as dotenv from 'dotenv'
import {
    usersRouter,
    studentsRouter

} from './routes/index.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT ?? 3000

app.use('/users',userRouter)
app.get('/',(req,res)=>{
    res.send('response from root router cc')
})

app.listen(PORT, async()=>{
    console.log(`listening on port ${PORT}`);
});