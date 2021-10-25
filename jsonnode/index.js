const fs=require('fs');

const biodata={
name:"salman",
age:"20",
city:"Gorakhpur"
};
const jsondata=JSON.stringify(biodata);
console.log(jsondata);
const obj=JSON.parse(jsondata);
console.log(obj.name);
fs.writeFile("json1.json",jsondata,(err)=>{
console.log("done");
});