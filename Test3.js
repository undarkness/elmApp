let arr1 = [1,4,6,7,8,0,2,3,5,9];
function quickSort(arr) {
  function theSort(startIndex,endIndex) {
    let left = startIndex;
    let right = endIndex;
    let pivot = Math.floor((endIndex-startIndex)/2)+startIndex;
    let flag = arr[pivot];
    if (endIndex > startIndex) {
    
      while(left < right) {
          while(left < right && arr[right] >= flag) {
              right--;
          }
          arr[pivot] = arr[right];

          while(left < right && arr[left] <= flag) {
              left++;
          }
          arr[right] = arr[left];     
          pivot = left;
      }
      arr[pivot] = flag;
      theSort(startIndex,pivot);
      theSort(pivot+1,endIndex); 
    } 
  }
  theSort(0, arr.length-1);
  return arr;
}

console.log(quickSort(arr1));


