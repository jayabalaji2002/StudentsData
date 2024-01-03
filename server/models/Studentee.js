const mongoose = require('mongoose');
const schema = mongoose.Schema


const studentSchema = new schema({

    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    fatherName: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    phone: {
        type: Number
    },
    profilePhoto:{
        type:String
    }
}, { timeStamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
