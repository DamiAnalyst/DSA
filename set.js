// const letters = new Set(['a','b','c']);
// console.log(letters);

// const letters = new Set();
// letters.add('a');
// letters.add('b');
// letters.add('c');
// console.log(letters);

// const array = ['a','b','c','a','c','d'];
// const nums = [1,2,3,4]
// const arraySet = new Set ([...array]);
// const arrayList = Array.from(arraySet);
// console.log(arraySet);
// arraySet.forEach( elem => console.log(elem));
// for(num of arraySet){console.log(num)}
// for (letter of array){console.log(letter)}
// for (num of nums){console.log(num + 1)}
// console.log(arrayList);

function union(a,b){
    let unionSet = new Set(a);
    for(let i of b){unionSet.add(i)}
    return unionSet
}

function intersection(setA,setB){
    let intersectionSet = new Set();

    for(let i of setB){
        if(setA.has(i)){
            intersectionSet.add(i)
        }
    }
    return intersectionSet;
}s

const setA = new Set(['apple','mango','orange']);
const setB = new Set(['grapes','apple','banana']);
const result = union(setA, setB);
const res2 = intersection(setA,setB)
console.log(result);
console.log(res2)