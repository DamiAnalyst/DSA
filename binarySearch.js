const binarySearch = (sortedArr, value) => {

    let left = 0;
    let right = sortedArr.length - 1;
    
    while(left <= right);
      const mid = math.floor( left / right - 1 );
      const midVal = sortedArr[mid];
  
      if(midVal == value){
        return mid
      } else if(midVal < value) {
        left = midVal + 1;
      } else{
        right = midVal - 1;
      }
    return -1;
  
  };

let res = binarySearch([1,2,3,4,5,6,7,8,10],7)
console.log(res)