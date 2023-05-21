import {body,validationResult } from 'express-validator'
async function getAllStudents (req,res) {
    // res.send('get Students haha')
    res.status(200).json({
        message : 'Getstudent sucessfully',
        data:[
            {
                name: 'nguyen van A',
                email:'nguyenvana@gmail.com',
                age: 18
            },
            {
                name: 'nguyen van b',
                email:'nguyenvanb@gmail.com',
                age: 19
            },
            {
                name: 'nguyen van c',
                email:'nguyenvanc@gmail.com',
                age: 20
            },
        ]
    })
    // hien loi
    // res.status(500).json({
    //     message: 'cant not get student'
    // })
}

async function getStudentById (req,res){
    // res.send('get detail student by id: '+ req?.params?.id)
    res.status(200).json({
        message: 'login user successfully',
        data:"detail user here"
    })
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