let arr1 = [1,4,6,7,8,0,2,3,5,9];
function quickSort(arr) {
  function theSort(startIndex,endIndex) {
    let left = startIndex;
    let right = endIndex;
    //取一个值为标准值，这里取中间值，可以降低最坏情况的概率
    let pivot = Math.floor((endIndex-startIndex)/2)+startIndex;
    let flag = arr[pivot];
    // 如果左边索引大于等于右边索引说明已经整理完成一个组了
    if (startIndex >= endIndex) {
      return;
    } 
    //没有则在组内找一遍并整理，直到left和right相遇
    while(left < right) {
    /*
    寻找结束的条件是：
    1，找到一个小于或者大于key的数（大于或小于取决于想升
    序还是降序）
    2，没有符合条件1的，并且left与right的大小没有反转
    */ 
          while(left < right && arr[right] >= flag) {
              right--;//向前寻找
          }
          /*找到这个值后，将它赋值给arr[pivot]，
          等下一步再把从前向后找到的值赋给arr[right];
          以实现找到的两值位置的交换；
          再在把left赋给pivot，以记录flag值最新的位置；等本组整理完后
          再把flag的值还给它
          */
          arr[pivot] = arr[right];

          while(left < right && arr[left] <= flag) {
              left++;
          }

          arr[right] = arr[left]; 
          pivot = left;//更新flag值最新的位置，如果开始直接用arr[left]值做flag值，则省此步
      }
    arr[pivot] = flag;//整理完一组后，arr[pivot]回归原值
    theSort(startIndex,pivot);//用同样方法对分出来的右边（pivot新位置的右侧）的小组做整理
    theSort(pivot+1,endIndex);//对左侧同理 
    //最终会分出很多小组并分别整理，直到只剩2个交换位置后再分一次结束
  }
  theSort(0, arr.length-1);
  return arr;
}

console.log(quickSort(arr1));

