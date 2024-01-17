function binaryAgent(str){
    return str.split(" ").map(elem => String.fromCharCode(parseInt(elem,2))).join("");
}

let res = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000")
console.log(res);

console.log(Boolean(undefined))