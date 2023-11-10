// 3 differrent exports in javascript

/* No. 1 export */
export const thokozile1 = "thokozile";

export function thokozile2(name){
    console.log("1. My name is: " + name);
}

/* No. 2 */
function thokozile4(name) {
    console.log("2. My name is: " + name);
}

export default thokozile4;

/* No.3  */
const thokozile5 = "thokozile5";

function thokozile6(name) {
    console.log("3. My name is: " + name)
}

module.exports = {thokozile5, thokozile6}
