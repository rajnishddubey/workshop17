require("dotenv").config();
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const prodroute = require("./route/user");

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("connected",connected=>{
    console.log("database is connected")
})
mongoose.connection.on("error",err=>{
    console.log("Error in getting connected in database")
})



app.use(bodyparser.json());


app.use("/user",prodroute)




app.listen(5000,()=>{
    console.log("Apko 5000 port pe suna ja raha hai")
})