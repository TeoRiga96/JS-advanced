class Person {
  
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  get fullName(){
    return this.firstName + " " + this.lastName;
  }
   
  
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);
// console.log(person.firstName)

person.firstName = 'Maria'; //perchè devo fare un set e get per firstName se già così può essere riassegnato ad un altro valore?? 
person.lastName = 'Verdi'; //stessa domanda 
// console.log(person.firstName)
console.log(person.fullName);