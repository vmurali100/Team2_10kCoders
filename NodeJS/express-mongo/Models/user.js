var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    }
})
// Creating Mongoose model and Exported
module.exports = mongoose.model('user',UserSchema)