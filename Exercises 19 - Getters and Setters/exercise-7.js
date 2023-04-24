class Person {
  #firstName = "";
  #lastName = "";
  #age = 0;
  constructor(firstName, lastName, age){
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }
  
  get fullName(){
    return this.#firstName + " " + this.#lastName;
  }
   
  
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);
console.log(person.firstName)

person.firstName = 'Maria'; 
person.lastName = 'Verdi'; 
console.log(person.firstName)
console.log(person.fullName);