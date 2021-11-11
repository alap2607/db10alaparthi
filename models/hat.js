const mongoose = require("mongoose") 
const hatSchema = mongoose.Schema({
    
    hat_name: {
        type: String,
        minlength: 4
},
    colour: {
        type:  String,
        minLength: 4
},
    price: {
        type: String,
        minLength: 5
}
}) 
 
module.exports = mongoose.model("hat", hatSchema) 