// class Thokozile
// {
//     constructor(module , positions , age)
//     {
//         this.module = module ;
//         this.positions = positions ;
//         this.age = age ;
//     }
//     addMoreInformation(adding)
//     {
//         this.adding = adding ;
//     }
//     getInformation()
//     {
//         console.log(`Name of the person is ${this.positions} , with this age ${this.age}`);
//     }
// }
// module.exports = {Thokozile};


class Citizen
{
    constructor(name , id )
    {
        this.name = name ;
        this.id = id ;

    }

    addAddress(add)
    {
        this.add = add;

    }
    getDetails()
    {
        console.log(`Name of the resident is ${this.name} , residing at ${this.add}`);
    }
}
module.exports = {Citizen};