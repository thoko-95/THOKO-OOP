const student = {

    //data property
    firstName : 'Thokozile',
    surname : 'Mgidi',
    Contants : '0827835761',
    age : '56',
    //Accessor property(getter)
    get getName()
    {
        return this.firstName;//dot notation with this for singular object
        return this.surname;
        return this.Contants;
        //return [this.firstName ,this.surname ];//square brackets to return many things or information
    },

    set changeName(newName)
    {
        this.firstName=newName
    },

    get getDetails(){

            return [this.firstName, this.surname , this.age , this.Contants];
    }
 

};
//ACCESSOR PROPERTY(SETTER)

console.log(student.firstName);
console.log(student.getName)
console.log(student.surname)
//call everything

console.log(student.getDetails);
student.changeName = "Thoko";


const teacher = {}

const learners = []