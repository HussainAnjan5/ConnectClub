const mongoose = require("mongoose")
const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/user')
        console.log(`mongo db connected at ${conn.connection.host}` );
    } catch (error) {
        console.log(error);
        process.exit(1) 
    }
}
module.exports = connectDB