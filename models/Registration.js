const mongoose = require('mongoose');


const registrationSchema = new mongoose.Schema({

    salutation: {
        type: String,
        enum: ['Mr', 'Mrs', 'Miss', 'Dr'],
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    companyEmail: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    personalEmail: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        enum: ['USA', 'India', 'Canada'],
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
});

const Registration = mongoose.model('Registration', registrationSchema);


module.exports = Registration;
