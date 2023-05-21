import { ObjectId,Schema } from "mongoose";
import mongoose from "mongoose";
import isEmail from "validator/lib/isemail.js";

const Student = mongoose.model('Student',
    new Schema({
        id: { type: ObjectId},
        name:{
            type: String,
            required: true,
            validate: {
                validator: (name) =>name.length > 3,
                message: 'Name must be at least 3 characters'
            }
        },
        email: {
            type: String,
            validate: {
                validator: isEmail,
                message: 'Email is incorrect format'
            }
        },
        languages: {
            type: [String], // array: "english","jp"
        },
        gender: {
            type: String,
            enum: {
                values: ['male', 'female'],
                message:'{value} is not supported'
            },
            required: true,
        },
        phoneNumber:{
            type: String,
            required: true,
            validate: {
                validator: (phoneNumber) => phoneNumber.length > 5 && phoneNumber.length <=20,
                message: 'Phone number must be at least 5 characters'
            }
        },
        address: {
            type: String,
            required: false,
        },

    }
    // },{
    //     autoCreate: false,
    //     autoIndex: true
    // }
    )
)

export default Student