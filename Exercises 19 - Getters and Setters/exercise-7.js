class Person {
  #firstName = "";
  #lastName = "";
  age = 0;
  constructor(firstName, lastName, age){
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.age = age;
  }
  set firstName(newFirstName){
    this.#firstName = newFirstName;
  }
  get firstName(){
    return this.#firstName;
  }
  set lastName(newLastName){
    this.#lastName = newLastName;
  }
  get lastName(){
    return this.#lastName;
  }
  get fullName(){
    return this.#firstName + " " + this.#lastName;
  }
   
  
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria'; 
person.lastName = 'Verdi'; 
console.log(person.firstName)//prova. in questo caso firstName è il get e non il parametro (perchè è privato)
console.log(person.fullName);