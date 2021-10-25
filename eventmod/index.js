const EventEmitter=require('events');

const event=new EventEmitter();
event.on('sayname',()=>{
    console.log("my name is salman");
});
event.on('sayname',(sc,msg)=>{
    console.log(`my name is salman ${sc} and ${msg}`);
});
event.emit("sayname",200,'ok');