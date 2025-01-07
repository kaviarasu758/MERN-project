var mongoDB = require('mongoose')

var UserData=mongoDB.Schema ({
    "userName":String,
    "password":String
})
var User_Data = mongoDB.model("user",UserData)



module.exports = User_Data;