import express from 'express'
import * as dotenv from 'dotenv'
import {
    usersRouter,
    studentsRouter

} from './routes/index.js'

dotenv.config()
import connect from './database/database.js'
const app = express()
connect()
app.use(express.json())
const PORT = process.env.PORT ?? 3000

app.use('/users',usersRouter)
app.use('/students',studentsRouter)
app.get('/',(req,res)=>{
    res.send('response from root router cc')
})

app.listen(PORT, async()=>{
    console.log(`listening on port ${PORT}`);
});