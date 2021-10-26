const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/student",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connection successfully..!"))
.catch((err)=>console.log(err));


const playlistSchema= new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    phone:String
})


const Studentdata=new mongoose.model("Studentdata",playlistSchema);



// createDocument=async()=>{
//     try{
        
//         const third=new Studentdata({
//             fname:"deepak",
//             lname:"kumar",
//             email:"deepak@gmail.com",
//             phone:"7669815756"
//         })
//         const result=await Studentdata.insertMany([third]);
//         console.log(result);
//  }catch(err){
//      console.log(err);
//  }
// }
// createDocument();