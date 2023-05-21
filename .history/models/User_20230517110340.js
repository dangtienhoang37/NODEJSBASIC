import mongoose, { Schema, ObjectId } from "mongoose"
export default mongoose.model('User',
    new Schema({
        id: {type: ObjectId},
        name: {
            type: String,
            required: true, //not Null
            validate: {
                validator: (value) => value.length > 3,
                message: 'Username must be at least 3 characters'
            }
        },
        email: {
            type: String,
            // required: true, //not Null
            validate: {
                validator: (value) => isEmail,
                message: 'Email is incorrect format'
            }
        }
    })
)