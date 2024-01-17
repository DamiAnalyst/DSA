function pairElements(str){
    const pairings = {
        "A":"T",
        "T":"A",
        "C":"G",
        "G":"C"
    }

    return str.split("").map(elem => [elem, pairings[elem]]);
}

let res = pairElements("GCG")
console.log(res);