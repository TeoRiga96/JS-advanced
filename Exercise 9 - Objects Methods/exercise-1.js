const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

// let values = Object.values(person);
// console.log(values);

// let keys = Object.keys(person);
// console.log(keys);

let entries = Object.entries(person);
console.log(entries);