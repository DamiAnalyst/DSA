function palindrome(str){
    let newStr = str.toLowerCase().replace(/[^a-z\d]/g,'');
    
    return newStr.split("").reverse().join("") === newStr;
}

let res = palindrome("eye___");
console.log(res);