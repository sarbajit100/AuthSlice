const mongoose = require('mongoose');


const MONGODB_URL = process.env.MONGODB_URL;
// const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017";
// const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://root:root@cluster0.bfppb5n.mongodb.net/';

const databaseconnect =()=> {
    mongoose
        .connect(MONGODB_URL)
        .then((conn) => console.log(`Connected to DB: ${conn.Connection.host}`))
        .catch((err) => console.log(err.message));
}

module.exports = databaseconnect;