const isLogged = true;

function loggedCheck(val){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            if(val == true){
                let rand = Math.random
                resolve(rand)
            } else {
                reject(new Error('isLogged è false'))
            }
        },1000)
    })    
}

function getId(num){
    return new Promise((resolve, reject) => {
        if(num < 50){
            resolve(console.log({name: "John", age: 24})) //ho aggiunto il console.log altrimenti nel terminale del pc non mi esce nulla. 
            //dal browser basta il resolve
        } else{
            reject( new Error('num < 0.5'))
        }
    })
}

loggedCheck(isLogged)
    .then(getId)
    .catch((err) => console.error(err))