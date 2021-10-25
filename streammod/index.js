const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require("constants");
const fs=require("fs");
const http=require('http');
const server=http.createServer();
server.on("request",(req,res)=>{
    // first way


//     var fs=require("fs");
//     fs.readFile("input.txt",(err,data)=>{
//    if(err)return console.error(err);
//    res.end(data.toString());
//     });

//second way


//  const rstream=fs.createReadStream("input.txt");
// rstream.on("data",(chunkdata)=>{
//     res.write(chunkdata);
// });
// rstream.on("end",()=>{
//     res.end();
// });
// rstream.on("error",(err)=>{
//     console.log(err);
//     res.end("file not find");
// });

//third way
const rstream=fs.createReadStream("input.txt");
rstream.pipe(res);
});
  server.listen(8000,"127.0.0.1");
