const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const teamRouter = require("./routes/teamRoutes")
const testiRouter = require("./routes/testiroutes")

app.use(cors());



app.use(express.json());


app.use('/admin', teamRouter);
app.use('/testi', testiRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to database");
    app.listen(process.env.PORT,() => console.log("listening to "+ process.env.PORT))
}).catch((err) => {
    console.log(err); 
});
