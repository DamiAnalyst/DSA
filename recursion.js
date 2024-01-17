// function recursion(num){
//     if(num === 0){
//         return;
//     } 
//     numSquare = num**2
//     console.log(num, numSquare);
//     recursion(num-1);
// }

// let result = recursion(10);
// console.log(result);

// function traverse(arr,num){
//     arr = [1,2,3,4,5]
//     while(current){
//         let current = arr[num];
//         console.log(arr[num]);
//         console.log(arr[num-1]);
//         traverse(num - 1)
//     }
// }
// let result = traverse([1,2,3,4,5],4)
// console.log(result);

function swap(arr, i,j){
    [arr[i],arr[j]] = [arr[j], arr[i]]
}
let myArray = [12,-2,55,68,80];
swap(myArray,0,1);
console.log(myArray);
