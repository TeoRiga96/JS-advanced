const isLogged = true;

function loggedCheck(val){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            if(val == true){
                let rand = Math.random()
                resolve(rand)
            } else {
                reject(new Error('isLogged è false'))
            }
        },1000)
    })    
}

function getId(num){
    return new Promise((resolve, reject) => {
        if(num > 0.5){
            resolve({name: "John", age: 24}) 
        } else{
            reject(new Error('num < 0.5'))
        }
    })
}

loggedCheck(isLogged)
    .then(getId)
    .then((val) => console.log(val))
    .catch((err) => console.error(err))
    .finally(() => console.log('niente può fermarmi!'))
