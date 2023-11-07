let school = 
{
    name : 'Mahlenga Secondary School',
    location : 'Gauteng',
    establisher : '1982',
    20 : 1000 ,

    displayInfo : function ()
    {
        console.log(`Welcome to ${school.name} located at 
        ${school.location} which was established on
         ${school.establisher} having rating of
          ${school[20]}`);//for numbers or integer we strictly ude square brackets
    }
}
school.displayInfo();
   //or
console.log(school.location);
     //or
console.log(`${school.name}`);
//the $ inside the backticks is called identifier
//The s{} inside the backticks is called dynamic callback method