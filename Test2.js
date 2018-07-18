let arr1 = [1,4,6,7,8,0,2,3,5,9];
function quickSort(arr) {
  function theSort(startIndex,endIndex) {
      let left = startIndex;
      let right = endIndex;
      let flag = arr[left];
    if (endIndex > startIndex){ 
      while(left < right) {
            while(left < right && arr[right] >= flag) {
                right--;
            }
            arr[left] = arr[right];

            while(left < right && arr[left] <= flag) {
                left++;
            }
            arr[right] = arr[left];
      }
      arr[left] = flag;
      theSort(startIndex,left);
      theSort(left+1,endIndex); 
    }   
  }
  theSort(0, arr.length-1);
  return arr;
}
// function quickSort(arr){
//   function theSort(prev, endIndex){
//     var left = prev;
//     var right = endIndex;
//     var flag = arr[left];
//     if (endIndex > prev) {
//       // while(left < right){
//       //   for(; left < right; right--){
//       //     if (arr[right] < flag) {
//       //       arr[left++] = arr[right];
//       //       break;
//       //     };
//       //   }
//       //   for( ; left < right; left++){
//       //     if (arr[left] > flag){
//       //       arr[right--] = arr[left];
//       //       break;
//       //     }
//       //   }
//       // }
//       while(left < right) {
//         while(left < right && arr[right] >= flag) {
//             right--;
//         }
//         arr[left] = arr[right];

//         while(left < right && arr[left] <= flag) {
//             left++;
//         }
//         arr[right] = arr[left];
//       }
//       arr[left] = flag;
//       theSort(prev, left);
//       theSort(left + 1, endIndex);
//     }
//   }
//   theSort(0, arr.length-1);
//   return arr;
// }
console.log(quickSort(arr1));