const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const cors = require("cors")
app.use(cors())

const mongoose = require("mongoose");

const {  SignUp, Login } = require("./controllers/user");
mongoose.connect("mongodb+srv://meianbu:rkchekku@cluster0.vlaoi.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection Successfull")
}).catch((err) => {
    console.log(err)
})
// sign up API
app.post("/signup",SignUp)//checked

//Login API
//app.post("/login",Login);//checked

app.listen(8080, () => {
    console.log("Server is runing at port 8080")
})
