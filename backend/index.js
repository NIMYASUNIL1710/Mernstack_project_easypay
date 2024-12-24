const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./routes/index");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());


app.use("/api/v1", mainRouter);

app.listen(3000,()=>{
    console.log('server started ');
})



// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changePassword

// /api/v1/account/transferMoney
// /api/v1/account/balance
