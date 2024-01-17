const twoSum = (array,goal) => {
    let mapOfNumbers = {};
    let twoIndexes = [];

    for(let i=0; i<array.length;i++){
        mapOfNumbers[array[i]] = i;
    }

    for(let i=0; i<array.length;i++){
        let target = goal - array[i];
        if(mapOfNumbers[target] !== undefined && mapOfNumbers[target] !== i){
            twoIndexes.push(mapOfNumbers[target]);
            twoIndexes.push(i);
            break;
        }
    }
    return twoIndexes

}

let result = twoSum([7,2,9,13],9);
console.log(result);