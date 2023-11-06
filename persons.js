function Person(name , age )
{
    this.name = name;
    this.age = age;
}
//Then we create two persons objects

let John = new Person("John" , 23 );
let Jane = new Person("Jane ", 19);

console.log(John);
console.log(Jane);

let lydia ={

    'name' : 'lydia ',
    'age' : '26' ,
}
function Students(name , age , courses)
 {
    this.name = name;
    this.age = age;
    this.courses = courses ;
}
let Mgidi = new Students(lydia , lydia.age , "full stacker intern");
console.log(Mgidi);