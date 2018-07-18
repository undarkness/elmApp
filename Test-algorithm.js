/**
 * Created by Administrator on 2017/8/2.
 */
/*素数*/
// function isPrime (n) {
//   var isPrime = true;
//   for(i=2; i <= Math.sqrt(n); i++){
//     if(n % i === 0){
//       isPrime = false
//     }
//   }
//   return isPrime
// }
// console.log(isPrime(17))
//

/*阶乘*/
// var fac = function(n) {
//   var tmp = 1;
//   for (let i=1;i<=n;i++){
//     tmp *= i
//   }
//   return tmp
// }
// console.log(fac(4))

/*阶乘累加*/
// function sumFac (n) {
//   var a = 1 ;
//   for (let i=1;i<=n;i++){
//      a += fac(i)
//   }
//   return a
// }
// console.log(sumFac(4))

/*let 块级作用域防止i污染外部*/
// var a =[];
//   for (let i = 0; i <= 4; i++) {
//     a[i] = function () {
//       console.log(i);
//     }
//   };
// a[3]();
// console.log(i);

/*求斐波那契数列的第n个数是多少*/
// function feibo(n) {
//   // body...
//   var a = [];
//   if (n > 2) {
//     a[0]=1;
//     a[1]=1;
//   	for (var i = 2; i <= n; i++) {
//   	a[i] = a[i-1] + a[i-2];
//   	}
//     n = a[n-1];
//   }else{
//     n = 1;
//   }
//   return n;
// }
// console.log(feibo(7))



/*输入某年某月某日是此年第几天*/
// function dayNum(y,m,d) {
//   var md = [0,31,28,31,30,31,30,31,31,30,31,30,31];
//   var n = d;
//   for (var i = 0; i < m; i++) {
//     n += md[i];
//   }
//   if ( m > 2 && ((y % 4 == 0 && y % 100 !== 0)||y % 400 == 0 )) {
//     return n+1
//   } else {
//     return n
//   }
// }
// console.log(dayNum(2401,1,12));

// function a(xx){
//         this.x = xx;
//         return this;
//     }
//     var x = a(5);
//     var y = a(6);
//     console.log(x)
//     console.log(y)
//     console.log(x.x)
//     console.log(y.x)

// var quo = function (status) {
//   return {
//     get_statue: function () {
//       return status;
//     }
//   };
// }
// var myQue = quo ("amzed");
// console.log(quo())
// console.log(myQue.get_statue())

// function makeClosures(arr, fn) {
//   var result = [];
//     for (let i = 0; i < arr.length; i++){
//           result[i] = function(){
//           return  fn(arr[i]);
//         };
//     };
//   return result;
// };
// makeClosures([1, 2, 3], function (x) { 
//  return x * x; 
// });
// console.log(x);
// x = 20;
// var x = 10;
// console.log(x);
// x = 20;
// function x(){}
// console.log(x);
// if(true){
//   var a = 1;
// }else{
//   var b = true;
// }
// console.log(a);
// console.log(b);
// b = function c() {
//     a = 1, b = 2, c = 3;
// };

// b();
// console.log(a);    //1
// console.log(b);    //2
// console.log(c);  

function quickSort(array){
  function sort(prev, numsize){    //传入要排序的起始数组元素下标prev,排序部分数组长度numsize；
    var pivot = prev;         //设定首元素下标pivot，此处设为prev；
    var j = numsize -1;       //将最后一个元素的下标（numsize-1）赋值给j；
    var flag = array[prev];   //设定array[prev]赋值给flag（基准元素值）;
    if ((numsize - prev) > 1) {
      while(pivot < j){       //while...do 从左往右第一个比flag大的元素和从右往左第一个比flag小的数交换位置；
         //从最后一个元素往前遍历，如果j项小于基准元素，将j项值赋给pivot项，pivot+=1，跳出循环；
        for(; pivot < j; j--){
          if (array[j] < flag) {
            array[pivot++] = array[j];　
            //等价于a[pivot] = a[j]; pivot += 1;
            //   var a= [1,2,3];
            //   var i = 0;
            //   a[i++];输出的值为1,因为是i++，所以是先使用a[0]的值，再加上1,即先输出a[0]的值。
            //   a[++i];输出的值为2,因为++i,所以直接使i加1，即输出a[1]的值。
            break;
          };
        }     
         //从第一个元素往后遍历，如果pivot项大于基准元素，将pivot项值赋给j项，j-=1，跳出循环；                
        for( ; pivot < j; pivot++){
          if (array[pivot] > flag){
            array[j--] = array[pivot];//a[j] = a[pivot]; j -= 1;
            break;
          }
        }
      }
      array[pivot] = flag;
      sort(0, pivot);
      sort(pivot + 1, numsize);
    }
  }
  sort(0, array.length);
  return array;
}

console.log(quickSort([1,3,4,6,8,44,34,45345,3243,5,2,56,2,45,7,7,45,7,5,32,64357,23,37,3,57]));
