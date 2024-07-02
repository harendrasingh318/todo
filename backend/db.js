const mongoose = require("mongoose");
const { title } = require("process");
mongoose.connect("mongodb+srv://harendrasingh167:Chaudhary@123@haendra.3skylxk.mongodb.net/todo")

const todoSchema = mongoose.Schema({
    title: String,
    desciption: String,
    completed :Boolean
})
const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}
