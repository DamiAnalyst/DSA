function findName(collection, source){
    props = Object.keys(source)
    // arr = collection.filter(elem => props.every(prop => elem.hasOwnProperty(prop) && elem[prop] === source[prop]))

    arr = collection.filter(elem => props.every(prop => elem[prop] !==null && elem[prop]=== source[prop]))
    
    return arr;
}

let res = findName([{first:'Damilola', last:'Olatayo'}, {first:'John', last:'Smith'},
{first:'Jane', last:'Foster'}],{last:'Smith'})
console.log(res)