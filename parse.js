const myDetails =
`{
    "name" : "Lydia",
    "Surname" : "Mgidi", 
    "Course" : "Computer Science",
    "Age" : "45"
}`
const data = JSON.parse(myDetails);
JSON.stringify(myDetails);
console.log(myDetails);

const results = JSON.stringify(data);
console.log(results.toUpperCase());
