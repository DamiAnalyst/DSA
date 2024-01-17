function convertHTML(str){
    const entities ={
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&apos;",
    }
    const arrKey = Object.keys(entities);
    let arr = str.split("").map(elem => 
        {
        if(entities.hasOwnProperty(elem)){
            return entities[elem]
        } else {
            return elem
        }})
    return arr.join("");
}

let res = convertHTML("Dolce & Gabbana");
console.log(res)


// Another way of solving the problem
// function convertHTML(str){
//     const entities ={
//         "&": "&amp;",
//         "<": "&lt;",
//         ">": "&gt;",
//         "\"": "&quot;",
//         "'": "&apos;",
//     }
//     const arrKey = Object.keys(entities);
//     let arr = str.split("").map(elem => {
//         if(entities.hasOwnProperty(elem)){
//             return entities[elem]
//         } else {
//             return elem
//         }
        
//     //    if(arrKey.some(k => k === elem)){
//     //         return entities[elem]
//     //    } else {
//     //         return elem
//     //    }
//     })
//     return arr.join("");
// }

