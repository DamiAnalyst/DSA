function isPrime(x){
    if(x==2){
        return true;
    }

    for(let i=2; i < x; i++){
    if (x % i == 0){
        return false;
    }
    }
    return true 
}

let sum = 0;

function sumPrimes(num){
    for (let i=2; i<=num; i++){
        if(isPrime(i)){
            sum += i;
        }
    }
    return sum;
}
let res = sumPrimes(10);
console.log(res);