function repeatHello(callback){
    let interval = setInterval(callback, 1000);
    setTimeout(() => clearInterval(interval), 5000);
}
//let printHello = () => console.log('Hello')
//repeatHello(printHello);

repeatHello(() => console.log('Hello'));
//usiamo un'arrowFunc perchè ci ritorna direttamente il console.log e perchè possiamo assegnarlo ad una variabile
