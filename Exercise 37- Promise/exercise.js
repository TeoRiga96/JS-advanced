const number = 15;

function numberCheck(number){
    return new Promise((resolve, reject) =>{
        if(number >= 10){
            resolve(console.log('number è maggiore di 10'))
        } else {
            reject(console.log(new Error ('number è inferiore a 10')))
        }
    })
}

numberCheck(number)
    .catch((err) => console.error(err))