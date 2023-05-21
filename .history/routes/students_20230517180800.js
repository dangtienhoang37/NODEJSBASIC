import express from 'express'
import {
    
    studentController,
} from '../controllers/index.js'
const router = express.Router()

router.get('/', studentController.getAllStudents)

//get student by id
router.get('/:id', studentController.getStudentById)

router.post('/insert',studentController.insertStudent)
router.post('/generateFakeStudent',studentController.generateFakeStudent)


//put vs patch: put tim doi tuong can update, neu ko thay thi thoi; patch neu ko thay thi tao moi
router.patch('/',studentController.updateStudent)

export default router