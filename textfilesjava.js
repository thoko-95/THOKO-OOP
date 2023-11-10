
const fs = require('fs');

fs.readFile('java.txt','utf8',(err,data) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

const content = "!!!";

fs.appendFile('java.txt', content ,  err => {
    if(err){
        console.err;
        return;
    }
});