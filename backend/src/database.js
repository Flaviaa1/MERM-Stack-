
const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI)

const URI = process.env.MONGODB_URI
? process.env.MONGODB_URI
:'mongodb://localhost/databasetest';

mongoose.connect(URI, {
    useNewUrlParser: true,
   
});

const connection  = mongoose.connection;

connection.once('open', ()=>{
    console.log('la DB esta conectada')
})