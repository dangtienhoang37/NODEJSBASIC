import {body,validationResult } from 'express-validator'
async function getAllStudents (req,res) {
    res.send('get Students')
}

async function getStudentById (req,res){
    res.send('get detail student by id: '+ req?.params?.id)
}

async function updateStudent (req,res){
    res.send('patch(create new if not exist) insert student')
}
async function insertStudent (req,res){
    res.send('post insert user')
}

export default {
    getAllStudents,
    getStudentById,
    updateStudent,
    insertStudent
}