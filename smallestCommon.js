function computeSCM(num1,num2){
    let a = Math.min(num1,num2);
    let b = Math.max(num1,num2);

    for(let m = b; m <= a*b; m +=b){ 
        if(m%a === 0){
            return m
        }
    }
}


function smallestCommons(arr){
    let x = Math.min(...arr);
    let y = Math.max(...arr);
    let scm = 1;
    for(let i = x; i<=y ; i++){
        scm = computeSCM(scm,i)
    }
    return scm;
}

// Easier way of solving javascript functions with higher functions 




let res = smallestCommons([1,5]);
console.log(res);

// arr = [1,2,3,5,6];
// console.log(...arr);