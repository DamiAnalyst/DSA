// function swap( arr, i , j){
//    temp = arr[i];
//    arr[i] = arr[j];
//    arr[j] = temp;
// }

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr
}
// console.log(swap([1,2,3,4,5],1,2));


function bubbleSort(arr){
    for(let i=0; i < arr.length; i++){
        for( let j=0; j < arr.length-i ; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
            }    
        }
    }
   
    return arr
}
// console.log(bubbleSort([13,10,3,12,5],1,2));

function selectionSort(arr){
    for(let i=0; i < arr.length; i++){
        for( let j=0; j < arr.length ; j++){
            if(arr[j] < arr[j+1]){
                swap(arr, j, j+1)
            }    
        }
    }
    return arr
}

console.log(selectionSort([13,10,3,12,5],1,2));
