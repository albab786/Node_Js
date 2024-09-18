const fs=require('fs');
//const txt=fs.readFileSync('./new.txt','utf-8')
fs.readFile('./new.txt','utf-8',(err,txt)=>{
console.log(txt);


});
// console.log(txt);

