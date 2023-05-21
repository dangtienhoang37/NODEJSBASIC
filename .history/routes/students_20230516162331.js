import express from 'express'
import {
    
    studentController,
} from '../controllers/index.js'
const router = express.Router()

router.get('/',(req,res) =>{
    res.send('get Students')
})

//get student by id
router.get('/:id',(req,res) =>{
    // debugger
    res.send('get detail student by id: '+ req?.params?.id)
})

router.post('/insert',(req,res) =>{
    res.send('post insert user')
})

//put vs patch: put tim doi tuong can update, neu ko thay thi thoi; patch neu ko thay thi tao moi
router.patch('/',(req,res) =>{
    res.send('patch(create new if not exist) insert student')
})

export default router