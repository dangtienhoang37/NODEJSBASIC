import {Student} from '../models/index.js'
import Exception from '../error/Exception.js'
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
    try {
        debugger
        const student = await Student.create({
            name, 
            email, 
            languages,
            gender,
            phoneNum,
            address
        })
        debugger
    } catch (exception) {
        //err from vaildation
        if(!!exception.errors){
            //err from vaildation
            return new Exception('input error',exception.errors)
        }
        debugger
    }
    debugger
}

export default {
    getAllStudent,
    insertStudent
}