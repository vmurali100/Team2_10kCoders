var mongoose = require("mongoose");

var ProdutsSchema = mongoose.Schema({
    prodName: {
        type: String,
        required: true
    },
    prodPrice: {
        type: String,
        required: true
    }
})
// Creating Mongoose model and Exported
module.exports = mongoose.model('produt',ProdutsSchema)