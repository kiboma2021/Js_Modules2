import UserName, { printAge, printName } from './user.js'

const user = new UserName ('Johnstone', 15);

console.log (user);

printAge(user);
printName(user);