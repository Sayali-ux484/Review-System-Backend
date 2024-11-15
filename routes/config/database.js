import mongoose from "mongoose";

const dbConnect=async()=>{
try{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log(`MongoDb connected Sucessfully`)
 }
     catch(error){
     console.log(`Connection Failed`,error)
     
 }
}
export default dbConnect;
