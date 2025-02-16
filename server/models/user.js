const mongoose = require("mongoose");


const userSchema =  new  mongoose.Schema(
    {
        FirstName: {
            type: String,
        },
        LastName: {
            type: String,
        },
        Email: {
            type: String,
            unique: true,
            require: true,
        },
        Password: {
            type: String,
        },
    }
)


const userModel = mongoose.model("user" , userSchema);


module.exports = userModel;