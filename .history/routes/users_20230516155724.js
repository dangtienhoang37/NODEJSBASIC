import express from 'express'
const router = express.Router()

router.get('/',(req,res) =>{
    res.send('get user')
})
router.post('/login',(req,res) =>{
    //email- pass
    
    const {email, password} = req.body
    debugger
    res.send('Post login user')
})

router.post('/register',(req,res) =>{
    res.send('post register user')
})

export default router