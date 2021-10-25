// const chalk=require("chalk");
// const validator=require("validator");
// //console.log(chalk.red.inverse("hello world"));
// const res=validator.isEmail('salman@gmail.com');
// console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));
const url=require('url');
const http=require('http');
const server=http.createServer((req,res)=>{

    // console.log(req.url);
    // res.end("hello from the home site "); 



if(req.url=="/"){
    res.end("hello from the home sites "); 
}
 else if(req.url=="/about"){

    res.end("hello from the aboutus sides ");
}
else if(req.url=="/contact"){
    res.end("hello from the contactus sides ");
}
else{
    res.writeHead(404,{"contact-type":"text/html"});
    res.end("<h1>404 error  page</h1>");
}
   

});
server.listen(8000, "127.0.0.1",()=>{
console.log("listening to the port 8000");
});
