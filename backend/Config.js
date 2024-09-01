const mongoose=require("mongoose");

const connect=async()=>{
    try{
        const response=await mongoose.connect("mongodb://localhost:27017/ConnectClub")
        console.log(response,"Mongodb connected succesfully")
    }
    catch(err){
        console.log(err)
    }
}
module.exports=connect;