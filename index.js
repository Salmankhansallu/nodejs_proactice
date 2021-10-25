 const fs=require("fs");
// // fs.writeFileSync("read.txt","welcome all of you");
// fs.writeFileSync("read.txt","   weldone all of you");
// fs.appendFileSync("read.txt"," welcome all of you");
// const buf_data=fs.readFileSync("read.txt","UTF-8");
// // org_data=buf_data.toString();
// console.log(buf_data);
// // fs.renameSync("read.txt","readwrite.txt");
// // fs.mkdirSync("npmnode");
// fs.writeFile("readwrite.txt","good",(err)=>{
// console.log("file created");
// });
const os=require("os");
// console.log(os.arch());
// console.log(`${os.freemem()/1024/1024/1024}`);
// console.log(`${os.totalmem()/1024/1024/1024}`);
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());