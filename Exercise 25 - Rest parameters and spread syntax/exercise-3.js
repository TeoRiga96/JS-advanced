let numberStore = [0, 1, 2];
let newNumber = 3;

// numberStore.push(newNumber);
// console.log(numberStore);

const newNumberStore = [...numberStore, newNumber];
console.log(newNumberStore);