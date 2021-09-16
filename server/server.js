const express = require('express');
const connectToMongo = require('./mongodb');
connectToMongo();

const app = express();
const PORT = 6000;
app.get('/',(req,res) =>{
    res.send('hello kavya')
})
app.listen(PORT, ()=> console.log (`server is listining at http://localhost:${PORT}`));
