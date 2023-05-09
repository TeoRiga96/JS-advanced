

class Class1 {
   
    constructor(students){
        this.students = students
      
    }
    get newStudents(){
        return this.students
    }
    set newStudents(val){
        this.students = val;
    }

    async fetchUrl(url){
        let risp = await fetch(url, {
            headers: { "X-Api-Key": "rxll5ONMoj4N9oaYkjPRvw==mNIx2udRZoGzoSBg" }})
        let rispJson = await risp.json()
        
        return  rispJson;
    }

}
   
let stud1 = new Class1([], 0)
let x = stud1.fetchUrl("https://api.api-ninjas.com/v1/randomuser")
stud1.newStudents = x;
console.log(stud1.newStudents)







