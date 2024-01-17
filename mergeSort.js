function mergeSort(sortedArr1,sortedArr2){
    mergeArray = [];
    sortedArr1.forEach(elem => mergeArray.push(elem))
    sortedArr2.forEach(elem => {
        if(mergeArray.length === 0){
            mergeArray.push(elem)
        } else {
            var added = false;
            for(let i =0; i < mergeArray.length; i++){
                if(elem < mergeArray[i]){
                    mergeArray.splice(i,0,elem);
                    added= true;
                    break;
                }
            }
            if(!added){
                mergeArray.push(elem);
            }
        }
    })
    return mergeArray;
}

let result = mergeSort([1,3],[2,4])
console.log(result);