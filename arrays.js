let courses = [" React" , " Angular" , " JavaScript" , " React" ,];//Pre-defined array

courses.length=10;
courses[3] = "TypeScript";
courses[5] = "flutter";
courses[9] = "Nosipho";
console.log("Courses available : " + courses);
console.log(typeof courses) ;//I f we want our array to return as an object

console.log(courses instanceof Array);//IF WE WANT TO RETURN STRICTLY AN ARRAY
console.log("Is this an array method?" ,  courses instanceof Array)
console.log("new semester courses : " + courses)
console.log(courses);
courses.push(["Vue " , "Svelte" , "c/c++" ,  "python"])
console.log(courses.toString());


let learners = new Array(3);//Unefined
learners[0]=1;
learners[1]=2;
learners[2]=3;
learners[3]=4;

console.log("No of learners: " + learners);

//let courses = [" React" , " Angular" , " JavaScript" , " React" ];
let i = 0;
let thokos = courses.length;
let space = "";


for (  i = 0 ; i < thokos;) 
{

    space += [courses[i] + ''];
    i++;
}
console.log(space);





    
    


