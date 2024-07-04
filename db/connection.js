import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://vanshita222003:Klawclaw_22@mitrc.onxuacg.mongodb.net/travelBlogs")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
