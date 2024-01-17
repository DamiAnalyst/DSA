// function fearNotLetter(str){
//     let start = str.charCodeAt(0);
//     let finish = str.charCodeAt(str.length - 1);

//     for(let i = start; i <= finish; i++){
//         let codeLetter = String.fromCharCode(i);
//         let strLetter = str[i-start]

//         if(codeLetter !== strLetter){
//             return codeLetter
//         }
//     }
//     return str
// }

// let res = fearNotLetter('abce');
// console.log(res)

// // check the member of an array that is not present in another array

function fearNotLetter(str){
    let start = str.charCodeAt(0);
    let finish = str.charCodeAt(str.length - 1);

    let strArray = str.split("");
    let arrayComplete = []

    for(let i = start; i <= finish; i++){
        let codeLetter = String.fromCharCode(i);
        // let strLetter = str[i-start]

        // if(codeLetter !== strLetter){
        //     return codeLetter
        // }

        arrayComplete.push(codeLetter);
    }

    const result = arrayComplete.filter(item => !strArray.includes(item))
    return result;
}

let res = fearNotLetter('abcfi');
console.log(res)

// check the member of an array that is not present in another array