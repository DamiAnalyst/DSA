function writeUnique(arr){
    const uniqueArr = []
    const allArr = arr.reduce((arr1,arr2) => arr1.concat(arr2))
    arr = allArr.forEach(arr => {
        if(!uniqueArr.includes(arr)){
            uniqueArr.push(arr)
        }
    })

    return uniqueArr;
}

let result = writeUnique([[1,3,2],[5,2,1,4],[2,1]])
console.log(result);
