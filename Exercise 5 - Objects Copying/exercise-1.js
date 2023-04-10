const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon"

console.log(person1);
console.log(person2);
//la modifica viene passata perchè in realtà noi non abbiamo creato un nuovo oggetto ma semplicemente rinominato person1 con person2
// questa è la differenza nel copiare un oggetto by reference o by value