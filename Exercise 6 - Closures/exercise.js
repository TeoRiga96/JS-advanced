let helloName = ' hello World'; //--> variabile di prova

function printName(){
    let helloName = "Hello Jonh";
    function inner(){
        console.log(helloName);
    
    }
    return inner;
}

printName()(); //--> con una sola serie di parentesi non hai risultato perchè non ti ritorna nulla.
// perche il comando è nella seconda funzione