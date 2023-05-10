

class Class1 {
   
    constructor(students){
        this.students = students
      
    }
    get getStudents(){
        return this.students
    }
    set newStudents(val){
        this.students = val;
    }

    // async fetchUrl(url){
    //    const risp = await fetch(url, {
    //     headers: { "X-Api-Key": "rxll5ONMoj4N9oaYkjPRvw==mNIx2udRZoGzoSBg" }})
    //     const rispJson = await risp.json();
    //     this.newStudents = await rispJson;
    //     return  console.log(this.getStudents)
    // }

    fetchUrl(url){
        fetch(url,  {
        headers: { "X-Api-Key": "rxll5ONMoj4N9oaYkjPRvw==mNIx2udRZoGzoSBg" }})
        .then((risp) => risp.json())
        .then((toJson) => (toJson.username))
        .then((username) => (this.newStudents = username))
        .then(() => console.log(this.getStudents))
        .catch((err) => console.log(err))
    }
}
   
let stud1 = new Class1("Paolo")
stud1.fetchUrl("https://api.api-ninjas.com/v1/randomuser") 








