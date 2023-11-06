const student = {

    //data property
    firstName : 'Thokozile',
    surname : 'Mgidi',
    //Accessor property(getter)
    get getName()
    {
        return this.firstName;
        return this.surname;
    },

    set changeName(newName)
    {
        this.firstName=newName
    }
 

};
//ACCESSOR PROPERTY(SETTER)

console.log(student.firstName);
console.log(student.getName)
console.log(student.surname)
student.changeName = "Thoko";


const teacher = {}

const learners = []