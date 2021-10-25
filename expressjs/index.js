const path=require('path');
const express=require('express');
const app =express();
const hbs=require("hbs");
const staticpath=path.join(__dirname,"/public");
const partialspath=path.join(__dirname,"views/partials");
app.set("view engine","hbs");
hbs.registerPartials(partialspath);
// app.use(express.static(staticpath));
app.get("/",(req,res)=>{
    res.render("index",{
        name:"SALMAN",
    });
    });
app.get("/",(req,res)=>{
res.send("hello how are you");
});
 
app.get("/blogs",(req,res)=>{
    res.send("hello how are you about");
    });
    app.get("/temp",(req,res)=>{
        res.send("hello");
        });
        // app.get('*',(req,res)=>{
        //     res.render("404 Not Found");
        //     });
const ap=process.env.port || 8000;
app.listen(ap,()=>{
    console.log(`listining the port at 8000`);
});