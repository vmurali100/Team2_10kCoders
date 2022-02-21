var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
// Creating Mongoose model and Exported
module.exports = mongoose.model('user',UserSchema)