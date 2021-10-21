const app = require('./app');
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
const connectToDatabase = require("./config/database");


//config
dotenv.config({path:"server/config/config.env"})

connectToDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

 app.listen(process.env.PORT,() => {
    console.log(`server is running on http://localhost:${process.env.PORT}`)
  })