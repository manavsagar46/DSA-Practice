// ! ======== loops =========
// 1. for loop
// 2. while loop

// 1. Print numbers from 1 to 10.
/*
for(let i = 1; i<=10; i++){
    console.log(i)
}
*/
// 2. Print even numbers from 1 to 20.
/*
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/

// 3. Print the sum of numbers from 1 to n.
/*
let sum = 0;
let n = 20;
for(let i = 1; i<=n; i++){
    sum += i;
    console.log(`i is ${i} and sum is ${sum} `)
}
console.log("sum is : ",sum);
*/

// 4. Print the multiplication table of a given number.
/*
let num = 21;

for(let i = 1; i<=10; i++){
    console.log(`${num} * ${i} = ${num * i}`)
}
*/

// 5. Calculate the factorial of a given number.
// ?   6 --> 1 * 2 * 3 * 4 * 5 * 6
/*
let num = 6;
let fact = 1;
for(let i = 1; i<=num; i++){
    fact *= i;
    console.log(`factorial of ${i} is ${fact}`)
}
console.log(`factorial of ${num} is ${fact}`)
*/

// 6. Reverse a number using a loop.
/*
let num = 1234;
let rev = 0;
while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = parseInt(num / 10)
}
console.log(rev)
*/

// 7. Count the digits in a number using a loop.
/*
let num = 9876;
let num2 = num;
let count = 0;
while(num > 0){
    num = Math.floor(num / 10);
    count++;
}
console.log(`Count of digits in number ${num2} is ${count}`);
*/

// 8. Print the Fibonacci series up to n terms.
// ? 0, 1, 1, 2, 3, 5, 8, 13....

// let num = 7;
// let pre = 0;
// let next = 1;
// console.log(pre)
// console.log(next)
// for(let i = 2; i <num; i++){
//     temp = pre + next;
//     console.log(temp);
//     pre = next;
//     next = temp;
// }
/*
let num = 7;
let pre = 0;
let next = 1;
console.log(pre);
console.log(next);
for(let i = 0; i<num-2; i++){
  let temp = pre + next;
  console.log(temp);
  pre = next;
  next = temp;
}
*/

// 9. Find the sum of digits of a number.
// ?  Output: 6 (1 + 2 + 3)
/*
let num = 123482;
let temp = num;
let sum = 0;
while(temp > 0){
  let digit = temp % 10
  sum += digit;
  temp = Math.floor(temp / 10);
}
console.log(`Sum of ${num} is : ${sum}`);
*/

// 10. Check whether a number is a palindrome.
// ? Output: true
/*
let num = 121;
let temp = num;
let reversedNum = 0
while(temp > 0){
  let digit = temp % 10;
  reversedNum = reversedNum * 10 + digit;
  temp = Math.floor(temp / 10);
}
if(num === reversedNum){
  console.log(true, " : Number is Palindrome")
}else{
  console.log(false, " : Number is not Palindrome")
}
*/

// 11. Print a square of stars.
/*!
//  *****
//  *****
//  *****
//  *****
//  *****
*/
/*
let num = 5;
let pattern = "";

for(let row = 1; row <= num ; row++ ){
  for(let col = 1; col <= num; col++){
    pattern += "*"
  }
  pattern += "\n"

}
console.log(pattern)
*/

// 12. Print a right-angled triangle pattern.
/*
 *
 **
 ***
 ****
 *****
 */
/*
let num = 5;
let pattern = "";

for(let row = 1; row<=num; row++){
  for(let col = 1; col <= row; col++){
    pattern += "*";
  }
  pattern +="\n";
}
console.log(pattern)
*/

// 13. Print a number pyramid.
/*
  1
  1 2
  1 2 3
  1 2 3 4
*/
/*
let num = 4;
let pattern = "";

for(let row=1; row<=num; row++){
  for(let col=1; col<=row; col++){
    pattern += col;  
  }
  pattern += "\n"
}

console.log(pattern)
*/

// 14. Print reverse triangle of stars.
/*
 * * * *
 * * *
 * *
 *
 */
/*
let n = 5;
let pattern = "";

for(let row = n; row>=1; row--){
    
    for(let col = 1; col<=row; col++){
        pattern += " * "
    }
    pattern += "\n";
}
console.log(pattern)
*/

// 15. Print a multiplication table (1 to 10) using nested loops.
/*
let num = 10;
for(let i = 1; i<=num; i++){
  for(let j = 1; j<=10; j++){
    console.log(i*j)
  }
  console.log("\n")
}
*/

// 1. Find the maximum number in an array using a loop
// ? Output: 89
/*
let arr = [12, 5, 67, 22, 89];
let max = arr[0];
for(let i of arr){
  if(i > max){
    max = i;
  }
}
console.log(max);
*/

// 2. Reverse an array without using built-in methods
// ? Output: [4, 3, 2, 1]
/*
let arr = [1, 2, 3, 4];
let revArray = [];

for(let i = arr.length - 1; i>=0; i--){
  // console.log(revArray,revArray.length)
  revArray[revArray.length] = arr[i]
}

console.log(revArray)
*/

// 3. Check if an array is sorted in ascending order
// ? Output: true
/*
let arr = [1, 3, 5, 7, 9];
let flag = true;

for (let i = 0; i < arr.length; i++) {
  if(arr[i] > arr[i+1]){
    flag = false;
    break;
  }
}
if (flag) {
  console.log(true,"Array is sorted in ascending order");
} else {
  console.log(false,"Array is not sorted in ascending order");
}
*/


// check no. is prime or not.
/*
let n = 13;
let isPrime = true;

for(let i = 2; i < n; i++){
  if(n % i == 0 ){
    isPrime = false;
    break;
    }
    }
    if(isPrime){
      console.log("Number is Prime")
      }else{
        console.log("Number is not Prime")
    }
    */
// 4. Print all prime numbers between 1 and 100
// ? Output: 2, 3, 5, 7, 11, 13, ...
/*
let numtill = 100;
// let count = 0;
let count = []

for(let i = 0; i<=numtill; i++){
  let isPrime = true
  for(let j = 2; j < i; j++){
    if(i % j == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    count.push(i);
  }
}
console.log(count)
console.log("Total Count is : ", count.length)
*/

// 5. Print elements of an array in reverse order
// ? Output: 20 15 10 5
// ~ With inbuilt method
// let arr = [5, 10, 15, 20];
// let revArray = []
// for(let i=0; i<arr.length; i++){
//   revArray.unshift(arr[i])
// }
// console.log(revArray);

// ~ Without Inbuilt
/*
let arr = [5, 10, 15, 20];
let newarr = [];

for(let i=arr.length -1; i>=0; i--){
  // console.log(arr[i], i,  (arr.length - 1) - i)
  newarr[(arr.length - 1) - i] = arr[i]
}
console.log("Array: ",arr);
console.log("New Array: ", newarr);
*/

// ! BAAD ME DEKHNA H YE ABHI ============
// 6. Count frequency of each character in a string
// ? Output: { l: 1, o: 2, p: 1 }

// for(let i=0; i<str.length; i++){
//   console.log(str[i]);
//   let count = 0;
//   if(frequency.includes(str[i])){
//     count++
//   }else{
//     count++
//     frequency.str[i] = count;
//   }
// }

// console.log(frequency);

// 7. Remove duplicates from an array using loops only
// ? Output: [1, 2, 3, 4, 5]
// ~ inbuilt method
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let set = new Set()

// for(let val of arr){
//   set.add(val)
// }
// console.log(set);
// arr = [...set]
// console.log(arr);

// ~ Without inbuilt
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let newarr = [];

// for(let i = 0; i<arr.length; i++){
//   if(newarr.includes(arr[i])){
//     continue;
//   }
//   else{
//     newarr.push(arr[i])
//   }
// }
// console.log(newarr)

// ~ Exactly without inbuilt
/*
let arr = [1, 2, 2, 3, 4, 4, 5];
let newarr = [];

for(let i = 0; i<arr.length; i++){
  let isduplicate = false;

  for(let j = 0; j<newarr.length; j++){
    if(arr[i] === newarr[j]){
      isduplicate = true;
      break;
    }
  }

  if(isduplicate === false){
    newarr.push(arr[i])
  }

}
console.log(newarr)
*/

// 8. Check if a string is a palindrome (using loop)
// ? Output: true
// ~ With inbuilt
// let str = "madam";
// let strarr = str.split("")
// let newrr =[];

// for(let i=strarr.length - 1; i>=0; i--){
//   newrr[(strarr.length - 1) - i] = strarr[i];
// }

// let newstr = newrr.join("");
// if(str === newstr){
//   console.log(`String is palindrome`)
// }else{
//   console.log(`String is not palindrome`)
// }

// ~ Without inbuilt
/*
let str = "madam";
let ispalindrome = true;

for(let i=0; i<str.length/2; i++){
  console.log(i, str[i] , str[str.length - 1 - i])
  if(str[i] !== str[str.length - 1 - i]){
    ispalindrome = false;
    break;
  }
}

if(ispalindrome){
  console.log("String is Plaindrome")
}else{
  console.log("String is not Plaindrome")
}
*/

// Q. finding max no. in an array.
// let arr = [10, 5, 8, 20];
// let max = arr[0]
// for(let i=0; i<arr.length; i++){
//   if(arr[i] > max){
//     max = arr[i]
//   }
// }
// console.log(max)

// 9. Find the second largest number in an array
// ? Output: 10
// ~ With inbuilt
// let arr = [10, 5, 8, 20];
// let sortedArr = [...arr].sort((a,b)=> a-b)
// console.log(sortedArr[sortedArr.length - 2])
// console.log(arr)

// ! Abhi karna baaki hai 
// let arr = [10, 5, 8, 20];
// let largest = arr[0];         // Assume the first element is the largest
// let secondLargest = -Infinity;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     secondLargest = largest;   // Move the old largest to second
//     largest = arr[i];          // Update largest
//   } else if (arr[i] < largest && arr[i] > secondLargest) {
//     secondLargest = arr[i];    // Update second largest
//   }
// }

// if (secondLargest === -Infinity) {
//   console.log("No second largest number found.");
// } else {
//   console.log("Second largest number is:", secondLargest);
// }


// 10. Pattern: Print diamond shape of stars
/*!
//    *  
//   *** 
//  *****
//   ***
//    *
*/

let n = 5;
let pattern = "";

for(let row = 1; row<=n; row++){
  for(let col=1; col<=n; col++){
    if(row == (n +1)/2 || col == (n+1)/2) {
      pattern += "*"
    }
    else{
      pattern += " "
    }
  }
  pattern += "\n"
}
console.log(pattern)
















