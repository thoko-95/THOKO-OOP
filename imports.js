// import 1 goes with exports 1
import { thokozile1, thokozile2 } from './nodes-exports';

console.log(thokozile1);
console.log(thokozile2("Thokozile 2"));

// import 2 goes with exports 2
import thokozile4 from './nodes-exports';

console.log(thokozile4("Thokozile 3"));

// import 3 goes with exports 3
const { thokozile5, thokozile6 } = require('./nodes-exports');

console.log(thokozile5);
console.log(thokozile6("Thok0zile 6"));