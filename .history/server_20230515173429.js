import express from 'express'
import * as dotenv from 'dotenv'
import userRouter from './routes/user.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT ?? 3000

app.use('/users',)
app.get('/',(req,res)=>{
    res.send('response from root router cc')
})

app.listen(PORT, async()=>{
    console.log(`listening on port ${PORT}`);
});