import vehicle from "./classes"

let bike = new vehicle("kwasaki" , "suzuki" , "1340c");
let car = new vehicle("yaris" , "Toyota " , "WT1");
let truck = new vehicle( "Two Tipper" , "Mercedes Benz" , "C63");

console.log(`${bike.getName}`);
console.log(`${bike.name} is available for purchase`);
console.log(` The model of the car is : ${bike.engine} `);
console.log(`${bike.make}`)

console.log(`${car.getName}`);
console.log(`${car.name} is available for purchase`);
console.log(` The model of the car is : ${car.engine} `);
console.log(`${car.make}`)

console.log(`${truck.getName}`);
console.log(`${truck.name} is available for purchase`);
console.log(` The model of the car is : ${truck.engine} `);
console.log(`${truck.make}`);
