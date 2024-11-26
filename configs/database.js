const mongoose = require('mongoose');


async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/mydatabase");
        console.log('MongoDB connected');
    }catch(err) {
        console.log("Connect database failed", err);
    }
}
module.exports = connectDB;