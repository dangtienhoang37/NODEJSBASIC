import express from 'express'
const router = express.Router()

router.get('/',(req,res) =>{
    res.send('get Students')
})

//get student by id
router.get('/:id',(req,res) =>{
    res.send('get detail student by id')
})

router.post('/insert',(req,res) =>{
    res.send('post register user')
})

export default router