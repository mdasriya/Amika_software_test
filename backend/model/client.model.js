const mongoose = require("mongoose")

const clientSchema = mongoose.Schema({
name:{type:String, required:true},
Number:{type:String, required:true},
email:{type:String, required:true},
address:{type:String, required:true},
company: {type:String, required:true},
AadharId: {type:String, required:true},
user:{type:String, required:true},
UserId:{type:String, required:true},
},{
    versionKey:false
})

const ClientModel = mongoose.model("client", clientSchema)

module.exports = {
    ClientModel
}