// import fs from 'fs';

const student =
{
    name : 'Lydia',
    age : '89',
    language : 'ndebele',
    course : 'Diploma in IT',
    module : 'DSO35AT'

};

// const ludda =
// {
//     name : 'Daniel',
//     age : '37',
//     language : 'xhosa',
//     course : 'Master in IT',
//     module : 'DSO35AT'
// };

const fs = require('fs');

function writeData(obj)
{
    fs.writeFile('./student.json' , JSON.stringify(obj), err =>{
        if(err){
            console.log(err)
        }
        else{
            // obj = JSON.parse(jsonString);
            // obj.student.push(ludda);
            // fs.writeDataSync("./student.json" , JSON.stringify(obj));
            console.log('sucess')
        }
    })
}
function readData(){
    fs.readFile('./student.json' , 'utf-8' , (err,jsonString) =>{
        if(err){
            console.log(err);
        }
        else {
            try {
                const data = JSON.parse(jsonString);
                console.log(data);
                console.log('success');
            }catch (error){
                console.log('Error parsing JSON' , err);
            }
        }
    });
}
writeData(student);
readData;
