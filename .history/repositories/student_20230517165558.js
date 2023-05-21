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
        const student = await Student.create({
            name, 
            email, 
            languages,
            gender,
            phoneNum,
            address
        })
    } catch (exception) {
        debugger
    }
    debugger
}

export default {
    getAllStudent,
    insertStudent
}