import {Student} from '../models/index.js'
import Exception from '../error/Exception.js'
import faker from 'faker'
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

function generateFakeStudent(){
    [...Array(1000).keys()].forEach(async (index) => {
        let fakeStudent = {
            name: `${faker.name.findName()}- fake`,
            email: faker.internet.email(),
            languages: [
                faker.helpers.arrayElement(['English','Vie','French']),
                faker.helpers.arrayElement(['JP','Chinese','KR'])

            ],
            gender: faker.helpers.arrayElement(['male','female']),
            phoneNumber: faker.phone.phoneNumber(),
            address: faker.address.address()
        }
        debugger
        Student.create(fakeStudent)
    })
    
}
export default {
    getAllStudent,
    insertStudent
}