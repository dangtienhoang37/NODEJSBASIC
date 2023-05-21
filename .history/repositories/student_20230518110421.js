import {Student} from '../models/index.js'
import Exception from '../error/Exception.js'
import { faker} from '@faker-js/faker'
import { print } from '../helpers/print.js'
import student from '../controllers/student.js'
// import student from '../controllers/student.js'
const getAllStudent = async ({
    page,
    size,
    searchString,
}) => {
    // console.log('get all student with paging:'+ page)
    page = parseInt(page)
    size = parseInt(size)
    //searchString? name,email,address contains searchString 
    //agreegate data for all student
    let filterdStudents = await Student.aggregate([
        {
            $match: {
                $or:[
                    {
                        name: {$regex: `.*${searchString}.*`, $options: 'i'} //ignore case(ko phan biet hoa thuong)
                    },
                    {
                        email: {$regex: `.*${searchString}.*`, $options: 'i'} //ignore case(ko phan biet hoa thuong)
                    },
                    {
                        address: {$regex: `.*${searchString}.*`, $options: 'i'} //ignore case(ko phan biet hoa thuong)
                    }
                ]
            }
        },
        {
            $skip: (page -1)* size  // bo qua bn phan tu
        },
        {
            $limit: size    // gioi han phan tu trong 1 page
        }
    ])
    return filterdStudents
}
//language: ["eng","vie"],....

const getDetailStudent = async (studentId) => {
    const student = await student.findById(studentId)
    if (!student) {
        throw new Exception('cannot find Student with ID:'+studentId)
    }
    return student  // ?? la default val
}
const insertStudent = async ({
    name, 
    email, 
    languages,
    gender,
    phoneNumber,
    address
}) => {
    // console.log('insert Student')
    try {
        
        const student = await Student.create({
            name, 
            email, 
            languages,
            gender,
            phoneNumber,
            address
        })
        return student
        
    } catch (exception) {
        //err from vaildation
        if(!!exception.errors){
            //err from vaildation
            throw new Exception('input error',exception.errors)
        }
        
    }
    
}

async function generateFakeStudent(){
    [...Array(1000).keys()].forEach(async (index) => {
        let fakeStudent = {
            name: `${faker.person.fullName()}- fake`,
            email: faker.internet.email(),
            languages: [
                faker.helpers.arrayElement(['English','Vie','French']),
                faker.helpers.arrayElement(['JP','Chinese','KR'])

            ],
            gender: faker.helpers.arrayElement(['male','female']),
            phoneNumber: faker.phone.number(),
            address: faker.location.streetAddress()
        }
        debugger
        await Student.create(fakeStudent)
        print(`inserted student with name ${fakeStudent.name}`)
    })
    
}
export default {
    getAllStudent,
    insertStudent,
    generateFakeStudent,
    getDetailStudent
}