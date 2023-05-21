import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT ?? 3000

app.get('/',(req,res)=>{
    res.send('response from root router')
})

app.listen(PORT, async()=>{
    console.log(`listening on port ${PORT}`);
});