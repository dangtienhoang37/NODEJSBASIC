import {body,validationResult } from 'express-validator'
import HttpStatusCode from '../error/HttpStatusCode.js'
import { studentRepository } from '../repositories/index.js'
import { MAX_RECORD } from '../global/constants.js'

async function getAllStudents (req,res) {
    // res.send('get Students haha')
    //ex: http:localhost:3002?page=1&size=100
    let {page = 1, size = MAX_RECORD, searchString = ''} = req.query
    size = size >= MAX_RECORD ? MAX_RECORD : size
    try {
        
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message:exception.message
        })
    }
    let filterdStudents = await studentRepository.getAllStudent({
        size, page, searchString
    })
    res.status(HttpStatusCode.OK).json({
        size: filterdStudents.length,
        page,
        searchString,
        message : 'Getstudent sucessfully',
        data: filterdStudents,
        
    })
    // hien loi
    // res.status(500).json({
    //     message: 'cant not get student'
    // })
}

async function getStudentById (req,res) {
    debugger
    let studentId = req.params.id
    try {
        const student = await studentRepository.getStudentById(studentId)
        res.status(HttpStatusCode.OK).json({
            
            message : 'Get detail student sucessfully',
            data: student,
            
        })
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.message,
        })
    }
    
    
}

async function updateStudent (req,res){
    res.send('patch(create new if not exist) insert student')
}
async function insertStudent (req,res){
    // res.send('post insert user')
    try {
        const student = await studentRepository.insertStudent(req.body)
        res.status(HttpStatusCode.INSERT_OK).json({
            message:"insert student sucessfully",
            data: student
        })
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: 'cant not get student'+exception,
            validationErrors: exception.validationErrors
        })
    }
}
async function generateFakeStudent(req,res){
    await studentRepository.generateFakeStudent(res.body)
    res.status(HttpStatusCode.INSERT_OK).json({
        message:"insert fake student sucessfully",
        // data: student
    })
}
export default {
    getAllStudents,
    getStudentById,
    updateStudent,
    insertStudent,
    generateFakeStudent // shouldbe private
}