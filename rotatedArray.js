
function rotLeft(arr, rotations){
    let rotatedArray = arr.concat();
    for(let i=0; i < rotations; i++) {
        let frontItem = rotatedArray.shift();
        rotatedArray.push(frontItem);
    }
    return rotatedArray
}
const sampleArray = [1,2,3,4,5];
numRotation = 2;
let res = rotLeft(sampleArray, numRotation);
console.log(res);