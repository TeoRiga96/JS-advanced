
function repeatHello(callback){
    setInterval(callback, 1000)
}

let printHello = () => console.log('Hello'); 
//usiamo un'arrowFunc perchè ci ritorna direttamente il console.log e perchè possiamo assegnarlo ad una variabile

repeatHello(printHello);

