import { Student } from "../models"

const getAllStudent = async ({
    page,
    size,
    searchString,
}) => {
    console.log('get all student with paging:'+ page)
}
//language: ["eng","vie"],....
const insertStudent = async ({
    name, 
    email, 
    languages,
    gender,
    phoneNum,
    address
}) => {
    // console.log('insert Student')
    const student = await Student.create({
        name, 
        email, 
        languages,
        gender,
        phoneNum,
        address
    })
    // debugger
}

export default {
    getAllStudent,
    insertStudent
}