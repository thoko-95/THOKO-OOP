const courses = ['Computer science' , 'Information Technology' , 'Sofware Development'];

let i=0;//counter

let len = courses.length;// call the total number of elements in the array

let devops = " ";


for (;i < len;) 
{
    devops += courses[i + '' ] + '\n';
    i++;
    
}

  console.log(devops);