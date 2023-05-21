import {body,validationResult } from 'express-validator'
import HttpStatusCode from '../error/HttpStatusCode.js'
import { studentRepository } from '../repositories/index.js'
import { MAX_RECORD } from '../global/constants.js'

async function getAllStudents (req,res) {
    // res.send('get Students haha')
    //ex: http:localhost:3002?page=1&size=100
    let {page = 1, size = MAX_RECORD, searchString = ''} = req.query
    size = size >= MAX_RECORD ? MAX_RECORD : size
    let filterdStudents = await studentRepository.getAllStudent({
        size, page, searchString
    })
    res.status(HttpStatusCode.OK).json({
        message : 'Getstudent sucessfully',
        data: filterdStudents,
        size: filterdStudents.length
    })
    // hien loi
    // res.status(500).json({
    //     message: 'cant not get student'
    // })
}

async function getStudentById (req,res){
    res.send('get detail student by id: '+ req?.params?.id)
    
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