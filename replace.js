function myReplace(str, before, after){
    if(before[0] === before[0].toUpperCase()){
        after = after[0].toUpperCase() + after.slice(1,)
    } else{
        after = after[0].toLowerCase() + after.slice(1,)
    }
    
    return str.replace(before, after);
}
let res = myReplace("A quick brown fox jumped over the lazy dog", "Jumped","leaped");
console.log(res);