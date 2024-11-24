const mongoose = require('mongoose')
require ("dotenv").config();

const connectDB = async() =>{

    try {
        
        const conn = await mongoose.connect(process.env.MongoDB_URL)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        return false;
        
    }
}
module.exports = connectDB;