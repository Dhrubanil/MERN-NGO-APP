const mongoose = require("mongoose");
const validator = require("validator");

const FormSchema = mongoose.Schema({
    // firstname: {
    //     type: String,
    //     require: true,
    //     trim: true
    // },
    // lastname: {
    //     type: String,
    //     require: true,
    //     trim: true
    // },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Enter correct email :astonished:")
            }
        }
    },
    // gender: {
    //     type: String,
    //     require: true,
    //     trim: true
    // },
    // phone: {
    //     type: Number,
    //     require: true,
    //     trim: true,
    //     unique: true
    // },
    // age: {
    //     type: Number,
    //     require: true,
    //     trim: true
    // },
    password: {
        type: String,
        require: true,
        trim: true,
        min: [6, "atleast 6 character"]
    },
    // confirmpassword: {
    //     type: String,
    //     require: true,
    //     trim: true,
    //     min: [6, "atleast 6 character"]
    // },
    displayname: {
        type: String,
    }
});
const Form = new mongoose.model("register DataBase", FormSchema);

module.exports = Form;
// MONGODB_CONNECTION_STRING=mongodb + srv://Dhrubanil:Dhruba18@@cluster0.l0pu6.mongodb.net/<dbname>?retryWrites=true&w=majority