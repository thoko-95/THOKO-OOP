const fs = require('fs');

const obj = 
[
    {
        name : 'thoko',
        surname : 'mgidi',
        age : '67',
    },

    {
        name : 'tk',
        surname : 'mili',
        age : '76',
    },



]

let data = JSON.stringify(obj)

//writefile
fs.writeFile('tests.json' , data , {encoding : 'utf-8' , flag : 'w+'} , err =>{
    if(err){
        console.log(err);
    }
    console.log('success');
});

fs.appendFile('tests.json' , data , err =>{
    if(err){
        console.log(err);
        return;
    }
});

