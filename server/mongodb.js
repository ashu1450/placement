const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToMongo = () =>{
    mongoose.connect(process.env.DATABASE_ACCESS, ()=>{
        
        console.log("Connected to database successfully!");
    })
}

module.exports = connectToMongo;