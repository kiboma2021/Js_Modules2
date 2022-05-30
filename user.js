export default class User {
  constructor (name, age) {
    this.name = name;
    this.age = age ;
  }
}

export function printName (user) {
  console.log (`The person is called ${user.name}`)
}

export function printAge (user) {
  console.log (`${user.name} age is ${user.age}`)
}

//export default User;
//export { printAge, printName }