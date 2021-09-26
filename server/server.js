require ("dotenv").config({path: "./config.env"});
const express = require('express');
const connectToMongo = require('./mongodb');
const errorHandler = require('./middleware/error');
connectToMongo();

const app = express();
app.use(express.json());  // this is middleware that allow to get data from body

app.use(errorHandler);    // error handler middle ware

app.use('/api/auth', require('./routes/auth'));
//app.use('/api/private', require('./routes/private'));
const PORT = process.env.PORT || 5000;
app.get('/',(req,res) =>{
    res.send('hello kavya')
})
const server = app.listen(PORT, ()=> console.log (`server is listining at http://localhost:${PORT}`));

process.on("unhandledRejection",(err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
})
