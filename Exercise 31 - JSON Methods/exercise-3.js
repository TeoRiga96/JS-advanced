const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

const person12 = JSON.stringify(person1) ;
const person2 = JSON.parse(person12);
person2.address.city = 'Milan'; //ma se facciamo una deepcopy con lo spread (...) perchè person2 modifica person1. non è un nuovo oggetto???

console.log(person1);
console.log(person2);

