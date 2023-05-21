
function printAsyncName(callback, name){
    let set = setInterval(callback, 1000);
    setTimeout(() => clearInterval(set), 2000)
    setTimeout(() => console.log(name), 2000);
}

printAsyncName(() => console.log('Hello'), 'Gianni'); 