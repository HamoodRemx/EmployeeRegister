const express = require("express")
const app = express()
const dotenv = require("dotenv")
 
const DB_Connect = require("./DB")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const Port = process.env.PORT || 5000
// - Set Env from config.env
dotenv.config({ path: "./config.env" })

const company = require("./Routes/company")
const employee = require("./Routes/employee")

// - Connecting to the Database
DB_Connect()

app.use(express.json())

app.use("/api/company", company)
app.use("/api/employee", employee)

app.listen(Port, () => console.log(`Server is Running on port ${Port}`))
