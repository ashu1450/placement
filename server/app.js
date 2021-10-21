const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middleware/error");


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route import
const user = require("./routes/userRoutes");
const question = require("./routes/questionRoutes");


// error middleware
app.use(errorMiddleware);

app.use("/api/v1",user);
app.use("/api/v1",question);

module.exports = app;