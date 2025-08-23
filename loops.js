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
/*!
let num = 6;
let fact = 1;
for(let i = 1; i<=num; i++){
    fact *= i;
    // console.log(`factorial of ${i} is ${fact}`)
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
/*!
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
/*!
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

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Number is Prime");
} else {
  console.log("Number is not Prime");
}
*/

// 4. Print all prime numbers between 1 and 100
// ? Output: 2, 3, 5, 7, 11, 13, ...
/*
let numtill = 100;
// let count = 0;
let count = []

for(let i = 2; i<=numtill; i++){
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
/*!
for(let i = 2; i<=100; i++){
  let isPrime = true
  for(let j = 2; j < i; j++){
    if(i % j == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    console.log(i);
  }
}
// console.log(count)
// console.log("Total Count is : ", count.length)
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
/*!
let arr = [5, 10, 15, 20];
let newarr = [];

for(let i=arr.length -1; i>=0; i--){
  // console.log(arr[i], i,  (arr.length - 1) - i)
  newarr[(arr.length - 1) - i] = arr[i]
  // console.log(arr[i])
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

/*
let n = 5;
let pattern = "";

for(let row = 1; row<=n; row++){
  for(let col=1; col<=n; col++){
    if(row == (n+1)/2 || col == (n+1)/2) {
      pattern += "*"
    }
    else{
      pattern += " "
    }
  }
  pattern += "\n"
}
console.log(pattern)

*/

// var a = "10";
// var b = 10;
// var c = b + a;

//  console.log(c)

// ! <<<<<<< QUESTIONS >>>>>>>

// 1 Palindrome no.

/*
let num = 141;
let numcpy = num;
let rev = 0;

while(numcpy > 0){
  let digit = numcpy % 10;
  rev = rev * 10 + digit
  numcpy = parseInt(numcpy / 10)
}

// console.log(rev)
if(num === rev){
  console.log("Number is Palindrome")
}else{
  console.log("Not a Palindrome Number")
}
*/

// String Palindrome
/*
let str = "madam"
isPalindrome = true;

for(let i=0; i<str.length/2; i++){
  if(str[i] !== str[str.length - i -1] ){
    isPalindrome = false;
    break;
  }
}

if(isPalindrome){
  console.log("Palindrome String")
}else{
  console.log("Not a palindrome String")
}
*/

// Finding Duplicates in an Array
/*!
let arr = [1, 2, 3, 2, 4, 1];
let duplicates = [];

for (let i = 0; i < arr.length; i++) {

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      // Check if not already in duplicates
      let alreadyIn = false;

      for (let k = 0; k < duplicates.length; k++) {
        if (duplicates[k] === arr[i]) {
          alreadyIn = true;
          break;
        }
      }

      if (!alreadyIn) {
        duplicates.push(arr[i]);
      }

    }
  }
}

console.log("Duplicates:", duplicates); 

*/

// Sum of Positive Numbers in Array
/*
let arr = [1, -2, 2, 3, -4, 4, 5];
let sum = 0;

for(let i of arr){
  if(i > 0){
    sum += i
  }
}
console.log(sum)
*/

// Merging Arrays (Without methods)
/*
let arr1 = [1, 2];
let arr2 = [3, 4];
let mergedArray = [];

for(let i = 0; i<arr1.length; i++){
  mergedArray[mergedArray.length] = arr1[i];
}

for(let i = 0; i<arr2.length; i++){
  mergedArray[mergedArray.length] = arr2[i]
}
console.log(mergedArray)
*/

//  Average Salary Calculation
/*
let data = [
  { empName: "Manav", salary: 50000 },
  { empName: "Vamsi", salary: 45000 },
  { empName: "Aman", salary: 60000 }
];

let totalSal = 0
let count = 0;

for (let i = 0; i < data.length; i++) {
  totalSal += data[i].salary;
  count++; 
}
console.log(count)
console.log("Avg Sal. : ", totalSal/count)
*/

// String reversed:
/*
let str = "madam";
let strCopy = str;
let revStr = ""

for (let i = 0; i < str.length; i++) {
  revStr += str[str.length - i - 1];  
}

if(strCopy === revStr){
  console.log("Palindrome String")
}else{
  console.log("Not Palindrome")
}
*/
// (strCopy === revStr) ? console.log("Palindrome String") : console.log("Not Palindrome")

// ~ Without inbuilt Functions
/*
let input = "I Love JavaScript ";
let output = "";

let word = "";

for (let char of input) {
  if (char == " ") {
    output = word + " " + output;

    word = "";
  } else {
    word += char;
  }
}
console.log(output);
*/

// ? i/o ---> "Hello World";
// ? o/p ---> { H : 1, e : 1, l : 3, o : 2, W : 1, r : 1 , d : 1 };
// Hint: count of each character
/*!
let input = "Hello World";

let output = {};

for (let char of input) {
  // console.log(char);

  if (char == " ") {
    continue;
  }

  if (output[char]) { // output[char] is also a valid logic
    output[char] += 1;
  } else {
    output[char] = 1;
  }
}

console.log(output);
*/

/*`
let input = "JavaScript JavaScript JavaScript I don't Like JavaScript, but JavaScript Loves me, I can't avoid ";

let output = {};

let word = "";

for (let char of input) {
  // console.log(char);

  if (char === " ") {
    console.log(word);

    // count logic
    if (output[word]) {
      output[word] += 1;
    } else {
      output[word] = 1;
    }

    word = "";
  } else {
    word += char;
  }
}
// console.log(word);

console.log(output);
*/

/*!
const arr1 = [1,3,5];
const arr2 =[2,4,6];

function mergeSortedArrays(arr1,arr2){
  let output = []
  for (let i of arr1) {
    output[output.length] = i;
  }
  for (let i of arr2) {
    output[output.length] = i;
  }
  // console.log(output)
  output.sort((a,b)=> a-b)
  
  return output
}

console.log(mergeSortedArrays(arr1,arr2))
*/
// Sorting
// let arr = [ 1, 3, 5, 2, 4, 6 ]

// for (let i = 0; i < arr.length; i++) {

// }

// let num = 2001;
// rev = 0;

// while(num > 0){
//   let digit = num % 10;
//   rev = rev * 10 + digit;
//   num = parseInt(num / 10);
// }

// console.log(rev);

// Sum of all positive in an array:

// let arr1 = [1,-4,12,0,-3,29,-150];
// let sum = 0;

// for(let i of arr1){
//   if( i > 0 ){
//     sum += i;
//   }
// }
// console.log(sum);

// Duplicates no. in an integer array.
// ? output : console.log(findDuplicateEle([1,2,3,5,3,1,9],[1,2,4.5,53,12]))
/*
let arr1 = [1,2,3,5,3,1,9];
let arr2 = [1,2,4.5,53,12];
let duplicateArr = [];

function findDuplicateEle(arr1,arr2){
  
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]){
        let alreadyIn = false;
        if(duplicateArr.includes(arr1[i])){
          alreadyIn = true;
          break;
        }

        if(!alreadyIn){
          duplicateArr.push(arr1[i])
        }
      }
    }
    
  }

  return duplicateArr
}

console.log(findDuplicateEle(arr1,arr2));
*/

//
/*
let data = [
  { name: "Manav", salary: 50000 , department: "IT"},
  { name: "Vamsi", salary: 60000 , department: "HR" },
  { name: "Aman", salary: 55000 , department: "IT"},
  { name: "Aman", salary: 75000 , department: "HR"},
  { name: "Aman", salary: 65000 , department: "IT"},
  { name: "Aman", salary: 80000 , department: "HR"},
  { name: "Aman", salary: 70000 , department: "IT"},
];
let output = {department: "XYZ", avgSalary: 0}
let outputArr = []
let totalSalHr = 0;
let totalSalIt = 0;
let countHr = 0;
let countIt = 0;

data.map((emp) => {
  if(emp.department == "IT"){
    totalSalIt += emp.salary;
    countIt++;
  }else{
    totalSalHr+= emp.salary;
    countHr++;
  }
})

let avgSalhr = totalSalHr / countHr;
console.log(avgSalhr);
let avgSalIt = totalSalIt / countIt;

if (avgSalhr > 65000) {
  output.department = "HR";
  output.avgSalary = avgSalhr;
} else {
  output.department = "IT";
  output.avgSalary = avgSalIt;
}

outputArr.push(output)
console.log(outputArr)
*/
/*
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let data = [
  { name: "Manav", salary: 50000 , department: "IT"},
  { name: "Vamsi", salary: 60000 , department: "HR" },
  { name: "Aman", salary: 55000 , department: "IT"},
  { name: "Aman", salary: 75000 , department: "HR"},
  { name: "Aman", salary: 65000 , department: "IT"},
  { name: "Aman", salary: 80000 , department: "HR"},
  { name: "Aman", salary: 70000 , department: "IT"},
];

let output = {department:"XYZ", avgSal : 0 }

let HrArr = data.filter(emp => emp.department == "HR")
let ItArr = data.filter(emp => emp.department == "IT")
// console.log(arr)

let avgSalHr = 0;
let totalSalHr = 0;

HrArr.map((emp) => {
  totalSalHr += emp.salary
  avgSalHr = totalSalHr / HrArr.length
})

let avgSalIt = 0;
let totalSalIt = 0;

ItArr.map((emp) => {
  totalSalIt += emp.salary
  avgSalIt = totalSalIt / HrArr.length
})
*/
// let result = data.reduce((acc, curr) => {
//   const dept = curr.department;
//   if (!acc[dept]) {
//     acc[dept] = { totalSalary: 0, count: 0 };
//   }
//   acc[dept].totalSalary += curr.salary;
//   acc[dept].count += 1;
//   return acc;
// }, {});

// console.log(result)

// let nums = [10, 20, 30];

// let total = nums.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(total); // Output: 60
/*
let data = [
  { name: "Manav", salary: 50000 , department: "IT"},
  { name: "Vamsi", salary: 60000 , department: "HR" },
  { name: "Aman", salary: 55000 , department: "IT"},
  { name: "Sonam", salary: 75000 , department: "HR"},
  { name: "Sonu", salary: 65000 , department: "IT"},
  { name: "Monu", salary: 80000 , department: "HR"},
  { name: "Gautam", salary: 70000 , department: "IT"},
];

let totalSalHr = 0;
let totalSalIt = 0;

data.map(emp => {
  if(emp.department == "HR"){
    totalSalHr += emp.salary;
  }else{
    totalSalIt += emp.salary;
  }
})

let avgSalHr = totalSalHr/(data.filter(emp => emp.department == "HR").length)

let avgSalIt = totalSalHr/(data.filter(emp => emp.department == "IT").length)

if (avgSalHr > 65000) {
  console.log([{department: "HR", avgSal : avgSalHr}])
}else{
  console.log([{department: "IT", avgSal : avgSalIt}])
}
*/

/*
let data = [
  { name: "Manav", salary: 50000, department: "IT" },
  { name: "Vamsi", salary: 60000, department: "HR" },
  { name: "Aman", salary: 55000, department: "IT" },
  { name: "Sonam", salary: 75000, department: "HR" },
  { name: "Sonu", salary: 65000, department: "IT" },
  { name: "Monu", salary: 80000, department: "HR" },
  { name: "Gautam", salary: 70000, department: "IT" },
];

let avgSalHr =
  data
    .filter((emp) => emp.department == "HR")
    .reduce((acc, curr) => acc + curr.salary, 0) /
  data.filter((emp) => emp.department === "HR").length;

let avgSalIt =
  data
    .filter((emp) => emp.department == "IT")
    .reduce((acc, curr) => acc + curr.salary, 0) /
  data.filter((emp) => emp.department == "IT").length;

if (avgSalHr > 65000) {
  console.log([{ department: "HR", avgSal: avgSalHr }]);
} else {
  console.log([{ department: "IT", avgSal: avgSalIt }]);
}
*/
/*
let data = [
  { name: "Manav", salary: 50000, department: "IT" },
  { name: "Vamsi", salary: 60000, department: "HR" },
  { name: "Aman", salary: 55000, department: "IT" },
  { name: "Sonam", salary: 75000, department: "HR" },
  { name: "Sonu", salary: 65000, department: "IT" },
  { name: "Monu", salary: 80000, department: "HR" },
  { name: "Gautam", salary: 70000, department: "IT" },
];

let EmpHr = data.filter(emp => emp.department == "HR");
let EmpIt = data.filter(emp => emp.department == "IT");

let avgSalHr = EmpHr.reduce((acc, curr) => acc + curr.salary, 0) /EmpHr.length;
let avgSalIt = EmpIt.reduce((acc, curr) => acc + curr.salary, 0) /EmpIt.length;

if (avgSalHr > 65000) {
  console.log([{ department: "HR", avgSal: avgSalHr }]);
} else {
  console.log([{ department: "IT", avgSal: avgSalIt }]);
}
*/
/*
let data = [
  { name: "Manav", salary: 50000, department: "IT" },
  { name: "Vamsi", salary: 60000, department: "HR" },
  { name: "Aman", salary: 55000, department: "IT" },
  { name: "Sonam", salary: 75000, department: "HR" },
  { name: "Sonu", salary: 65000, department: "IT" },
  { name: "Monu", salary: 80000, department: "HR" },
  { name: "Gautam", salary: 70000, department: "IT" },
];

let salaryHR = data.filter(emp => emp.department == "HR").map(emp => emp.salary);
let salaryIT = data.filter(emp => emp.department == "IT").map(emp => emp.salary);

let avgSalHr = salaryHR.reduce((acc,curr) => acc + curr , 0)/salaryHR.length;
let avgSalIt = salaryIT.reduce((acc,curr) => acc + curr , 0)/salaryIT.length;

if (avgSalHr > 65000) {
  console.log([{ department: "HR", avgSal: avgSalHr }]);
} else {
  console.log([{ department: "IT", avgSal: avgSalIt }]);
}
*/

/*
let data = [
  { name: "Manav", salary: 50000, department: "IT" },
  { name: "Vamsi", salary: 60000, department: "HR" },
  { name: "Aman", salary: 55000, department: "IT" },
  { name: "Sonam", salary: 75000, department: "HR" },
  { name: "Sonu", salary: 65000, department: "IT" },
  { name: "Monu", salary: 80000, department: "HR" },
  { name: "Gautam", salary: 70000, department: "IT" },
];

function getAvgSal(dept){
  let department = data.filter(emp => emp.department == dept)

  return department.reduce((acc, curr) => acc + curr.salary ,0)/department.length
}

let avgSalHr = getAvgSal("HR")
let avgSalIt = getAvgSal("IT")

if (avgSalHr > 65000) {
  console.log([{ department: "HR", avgSal: avgSalHr }]);
} else {
  console.log([{ department: "IT", avgSal: avgSalIt }]);
}
*/

// ! ===== Arrays and Strings =====

//? 1. Find the maximum element in an array;
/*
let arr = [10,20,100,30,50,60,70,90]

function maxElem(arr){
  let max = arr[0];

  for(let elem of arr){
    if(elem > max){
      max = elem;
    }
  }
  return max
}
console.log(maxElem(arr))
*/

// ? 2. Count the numbers of even and odd in an array.
/*
let arr = [1,2,3,4,5,6,7,8,9,12,14,13,11,15,17]
let result = {evenCount : 0 , oddCount : 0}

for(let elem of arr){
  if(elem % 2 == 0){
    result.evenCount = result.evenCount + 1;
  }else{
    result.oddCount = result.oddCount + 1;
  }
}
console.log(result);
*/
/*
let arr = [1,2,3,4,5,6,7,8,9,12,14,13,11,15,17]
let result = {}

let oddCount = 0;
let evenCount = 0;

for(let elem of arr){
  if(elem % 2 == 0){
    evenCount++;
  }else{
    oddCount++
  }
}
console.log(oddCount);
console.log(evenCount);
*/
/*
let arr = [1,2,3,4,5,6,7,8,9,12,14,13,11,15,17]

let oddCount = arr.filter(elem => elem % 2 == 0).length
let evenCount = arr.filter(elem => elem % 2 != 0).length

console.log(oddCount);
console.log(evenCount);
*/

// ? 3. Reverse the given String.
/*
let str = "JavaScript";
let revStr = ""
for(let i of str){
  revStr = i + revStr   
}
console.log(revStr)
*/

/*
let str = "JavaScript";
let revStr = "";

for(let i = 0; i<str.length; i++){
  revStr += str[str.length - i - 1]
}

console.log(revStr);
*/

// ? 5. Print the fibonacci series upto n terms.
/*
let num = 8
let num1 = 0;
let num2 = 1;
let temp = 0;

for(let i = 0; i<num; i++){
  console.log(num1)
  temp = num1 + num2;
  num1 = num2;
  num2 =  temp;
}
*/

// ? 6. Find the second largest element in an array.

/*
! With inbuilt method
  let sortedArr = arr.sort((a,b) => a - b)
  console.log(sortedArr)
  console.log(sortedArr[sortedArr.length - 2])
*/

/*!
// ! WithOut Inbuilt
let arr = [23, 78, 12, 91, 5]

let largest = arr[0];
let secondLargest = -Infinity;

for(let i = 0; i<arr.length; i++){
  if(arr[i] > largest){
    secondLargest = largest;
    largest = arr[i];
  }else if(arr[i] < largest && arr[i] > secondLargest ){
    secondLargest = arr[i]
  }
}
console.log(secondLargest)
*/

// ? 7. Check if a string is palindrome.
/*!
let str = "madam"
// let str = str1.toString()
let isPalindrome  = true;

for(let i = 0; i<str.length/2; i++){
  if(str[i] != str[str.length - i - 1]){
    isPalindrome  = false;
    break;
  }
}
if(isPalindrome ){
  console.log("Palindrome String")
}else{
  console.log("Not a Palindrome")
}
*/

// ? 8. Sort an array using bubble sort.

// ? 9. Find sum of digit of a number.
/*
let num = 2346;
let sumOfDigits = 0;

while(num > 0){
  let digit = num % 10;
  sumOfDigits += digit;
  num = Math.floor(num / 10) 
}
console.log(sumOfDigits);
*/

// ? 10. Calculate factorial of a number.
/*
let num = 10;
let fact = 1;

for(let i=1; i<=num; i++){
  fact *= i;
}
console.log(fact)
*/

// ? 11. Merge two sorted array into one.
/*
let arr1 = [1,3,5]
let arr2 = [2,4,6] 

for(let i of arr2){
  arr1[arr1.length] = i
}
console.log(arr1)
*/

/*
let arr1 = [1,3,5]
let arr2 = [2,4,6] 
let mergedArray = [];

for(let i of arr1){
  mergedArray[mergedArray.length] = i;
}
for(let i of arr2){
  mergedArray[mergedArray.length] = i
}
console.log(mergedArray)
*/

// ? 12. Count the Frequency of an element in an array.
/*!
let arr = [10,5,10,15,10,5]
let frequency = {}

for(let i of arr){
  // let item = i
  if(frequency[i] === undefined){
    frequency[i] = 1
  }else{
    frequency[i]++;
  }
}

console.log(frequency);
*/

// ? 13. Find the missing element in the range from 1 to N.
// ? missing no = (n(n+1)/2) - sum of array
/*
var missingNumber = function (nums) {
  let n = nums[nums.length - 1];

  let sumOfArray = nums.reduce((acc, curr) => acc + curr);

  let expectedSum = (n * (n + 1)) / 2;
  let missingNo = expectedSum - sumOfArray;

  return missingNo;
};

let nums = [10, 11, 12, 15];
console.log(missingNumber(nums))
*/
/*
let arr = [1, 2, 3, 5];
arr.sort((a, b) => a - b);

let missing;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== i + 1) {
    missing = i + 1;
    break;
  }
}

if (missing === undefined) {
  missing = arr.length + 1;
}

console.log("Missing Number:", missing);
*/

// ? 14. Check if two strings are anagrams.
/*
let str1 = "geeks";
let str2 = "kseeg";
let charCount = {};

let isAnagram = true;

for (let i = 0; i < str1.length; i++) {
  let char = str1[i];
  if (charCount[char] === undefined) {
    charCount[char] = 1;
  } else {
    charCount[char]++;
  }
}

for (let i = 0; i < str2.length; i++) {
  let char = str2[i];
  if (charCount[char] == undefined) {
    charCount[char] = -1;
  } else {
    charCount[char]--;
  }
}
// console.log(charCount)

for (let key in charCount) {
  if (charCount[key] !== 0) {
    isAnagram = false;
    break;
  }
}

if (isAnagram) {
  console.log("Strings are Anagrams");
} else {
  console.log("Strings are not Anagrams");
}
*/

/*
let arr = [1,0,1,0,1,1,1,0];
let newArr = [];

for(let i = 0; i<arr.length; i++){
  if(arr[i] === 1){
    newArr[newArr.length] = arr[i];
  }
}
for(let i = 0; i<arr.length; i++){
  if(arr[i] === 0){
    newArr[newArr.length] = arr[i]
  }
}
console.log(newArr)
*/

/*
let str = "abcdabcea"
let newstr = ""
let shortnewStr = ""

for(let i=0; i<str.length; i++){
  if(str.charCodeAt(str[i]) < str.charCodeAt(str[i+1])){
    newstr += str[i];
  }
}
console.log(newstr)

for(let i = newstr.length ; i < str.length; i++){
  if (str.charCodeAt(str[i]) < str.charCodeAt(str[i])) {
    shortnewStr += str[i];
  }
}

if (newstr.length > shortnewStr.length) {
  console.log(newstr)
}else{
  console.log(shortnewStr)
}
*/

/*!
// ! Galat hai Sahi krna h abhi
let str = "abcdabcea"; // Output : abcd
let newstr = "";

for (let i = 0; i < str.length; i++) {
  let isConsicutive = true;
  let asciiCode = str[i].charCodeAt() + 1;
  // console.log(asciiCode);
  // console.log("=============");

  for (let j = 0; j < str.length; j++) {
    let asciiCode_J = str[j].charCodeAt();
    // console.log("ascii_J : ",asciiCode_J);
    // console.log("=============");

    if (i !== j && asciiCode !== asciiCode_J) {
      isConsicutive = false;
      if (i !== j && str[i] == str[j]) {
        break;
      }
    }
  }

  if (isConsicutive) {
    newstr += str[i];
  }
}

console.log(newstr);
*/

// ? Two Sum in array , return index
/*
let arr = [2, 7, 11, 15];
let target = 9;

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return []
}

console.log(twoSum(arr,target))
*/

// ? 189. Rotate Array
/*
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

// let nums = [1,2,3,4,5,6,7];
// for(let i = 0; i<nums.length; i++){

// }

// ? Input: nums = [0,1,0,3,12]
// ? Output: [1,3,12,0,0]
/*
let arr = [0,1,0,3,12];
let newArr = []

for(let i = 0; i<arr.length; i++){
  if(arr[i] !== 0){
    newArr.push(arr[i])
  }
}
for(let i of arr){
  if(i === 0){
    newArr.push(i)
  }
}
console.log(newArr)
*/
// ? 22. check if a number is perfect square.
// let num = 36

// for(let i = 2; i<num; i++){
//   if((i**i ) === num ){
//     console.log("number is a perfect square..")
//   }
// }

// for (var i=0; i < 10; i++){
//  setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// let arr = [10, 20, 30];

// arr.forEach(function (num, i) {
//   setTimeout(() => {
//     console.log(i, num);
//   }, 100);
// });

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), i * 1000);
// }

// ? Reverse a string
// let str = "hello";

// let revStr = "";

// for(let i =0; i<str.length; i++){
//   revStr += str[str.length - i - 1]
// }
// console.log(revStr)

// ? str plaindrome or not

// let str = "madam";
// let isPalindrome = true

// for(let i = 0; i<str.length/2; i++){
//   if(str[i] !== str[str.length - i - 1]){
//     isPalindrome = false;
//     break;
//   }
// }
// (isPalindrome)? console.log(true) : console.log(false)

// ? Q3. Count Vowels in a String

// let str = "hello world";
// let vowelCount = 0;

// for(let i = 0; i<str.length; i++){
//   if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
//     vowelCount++;
//   }
// }
// console.log(vowelCount)

// ? Q4. Remove Duplicates from a String
/*
let str = "programming";
let duplicateStr = ""

for (let i = 0; i < str.length; i++) {
  let alreadyIn = false;
  for (let j = 0; j < duplicateStr.length; j++) {
    if(str[i] === duplicateStr[j]){
      alreadyIn = true;
      break;
    }
    
  }
  if(!alreadyIn){
    duplicateStr += str[i]
  }
  
  
}

console.log(duplicateStr)
*/

// let str = "programming";
// let duplicateStr = ""
// let seen = {}

// for(let i = 0; i<str.length; i++){
//   let char = str[i];
//   if(!seen[char]){
//     duplicateStr += char;
//     seen[char] = true;
//   }
// }

// console.log(duplicateStr)
// console.log(seen)

//? Q5. Find the Most Frequent Character in a String
/*
let str = "bookkeeper";
let frequency = {}

for(let i = 0; i<str.length; i++){
  let char = str[i];
  if(!frequency[char]){
    frequency[char] = 1
  }else{
    frequency[char]++
  }
}

let max = 0;
let maxChar = ""
for(let char in frequency){
  let count = frequency[char]
  if(count > max){
    max = count;
    maxChar = char;
  }

}
console.log(maxChar)
console.log(max)
*/

// ? Q6. Check if two strings are anagrams
/*
let str1 = "listen";
let str2 = "silent";

let strFrequency = {};

for (let i = 0; i < str1.length; i++) {
  let char = str1[i];
  if (!strFrequency[char]) {
    strFrequency[char] = 1;
  } else {
    strFrequency[char]++;
  }
}
for (let i = 0; i < str2.length; i++) {
  let char = str2[i];
  if (!strFrequency[char]) {
    strFrequency[char] = -1;
  } else {
    strFrequency[char] -= 1;
  }
}
let isAnagram = true;
for (let key in strFrequency) {
  if (strFrequency[key] !== 0) {
    isAnagram = false;
    break;
  }
}
if (isAnagram) {
  console.log("Valid Anagram Str");
} else {
  console.log("Not an Anagram Str");
}
*/
/*
function isAnagram(s, t) {
  let frequency = {};
  
  if (s.length !== t.length) {
    return false;
  }
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!frequency[char]) {
      frequency[char] = 1;
    } else {
      frequency[char]++;
    }
  }
  
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!frequency[char]) {
      return false;
    } else {
      frequency[char]--;
    }
  }
  
  for (let key in frequency) {
    if (frequency[key] !== 0) {
      return false;
    }
  }
  return true;
}
let str1 = "listen";
let str2 = "silent";
console.log(isAnagram(str1,str2))
*/

// ? Q7. Count words in a sentence
/*
function wordCount(sentence) {
  let str = sentence.trim();  
  if(str.length === 0){
    return 0
  }
  
  let wordCount = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " && str[i-1] !== " ") {
      wordCount += 1;
    }
  }
  return wordCount
}

let sentence = "JavaScript is super fun!";
console.log(wordCount(sentence));
*/

// ? Capitalize first letter of each word
// let str = "hello world from js";
// let result = str
//   .split(" ")
//   .map((word) => word[0].toUpperCase() + word.slice(1))
//   .join(" ");
// console.log(result);
/*
let str = "hello world from js this is me manav";
let newStr = ""
for (let i = 0; i < str.length; i++) {
  let charCode = str.charCodeAt(i)

  if(i === 0 || charCode - 1 === 32){
   newStr += String.fromCharCode(charCode - 32);
  }else{
    newStr += str[i]
  }

}

console.log(newStr)
*/
/*
let str = "hello world from js";
let newStr = "";
let capitalizeNext = true;

for (let i = 0; i < str.length; i++) {
  let charCode = str.charCodeAt(i);

  if (capitalizeNext && charCode >= 97 && charCode <= 122) {
    newStr += String.fromCharCode(charCode - 32);
    capitalizeNext = false;
  } else {
    newStr += str[i];
    capitalizeNext = (str[i] === " ");
  }
}
console.log(newStr);
*/

// ? Q9. Find max and min in an array
/*
let arr = [5, 3, 9, 1, 6];
let max = arr[0];
let min = arr[0];

for(let i = 0; i<arr.length; i++){
  if(arr[i] > max){
    max = arr[i]
  }
  if(arr[i] < min){
    min = arr[i]
  }
}
console.log(max,min)
*/

// ? Q10. Find sum and average of elements
/*
let arr = [10, 20, 30, 40];
let sum = 0;
let count = 0

for(let i of arr){
  sum += i;
  count++
}
console.log("Sum : ", sum)
console.log("Avg : ", sum/count)
*/

// ? Q11. Reverse an array
/*
let arr = [1, 2, 3, 4];
let revArray = [];

for (let i = 0; i < arr.length; i++) {
  revArray[i] = arr[arr.length - i - 1]
}
console.log(revArray)
*/

// ? Q12. Check if a string is a palindrome
/*
let str = "madam";
isPalindrome = true;
for (let i = 0; i < str.length/2; i++) {
  if(str[i] != str[str.length - i - 1]){
    isPalindrome = false;
    break;
  }
}
(isPalindrome) ? console.log("Palindrome") : console.log("Not Palindrome")
*/

// ? Q13: Count the frequency of each character in a string
/*
let str = "hello"
let strFrequency = {}

for(let i = 0; i<str.length; i++){
  char = str[i];
  if(!strFrequency[char]){
    strFrequency[char] = 1;
  }else{
    strFrequency[char]++
  }
}

console.log(strFrequency)
*/

// ? Q14: Check if Two Strings Are Anagrams
/*
function isAnagram(s,t){

  let charFrequency ={}

  if(s.length !== t.length){
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    char = s[i];
    if (!charFrequency[char]) {
      charFrequency[char] = 1;
    }else{
      charFrequency[char]++
    }
  }

  for (let i = 0; i < t.length; i++) {
    char = t[i];
    if(!charFrequency[char]){
      return false;
    }else{
      charFrequency[char]--;
    }
  }

  for(let key in charFrequency){
    if(charFrequency[key] !== 0){
      return false;
    }
  }
  return true
}

let str1 = "listen"
let str2 = "silent"
console.log(isAnagram(str1,str2))

*/

// ? Q15: Remove all vowels from a string
// 👉 Input: "javascript is awesome"
// 👉 Output: "jvscrpt s wsm"
/*
let str = "javascript is awesome".toLowerCase();
let newStr = ""

for (let i = 0; i < str.length; i++) {
  char = str[i];
  if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    continue;
  }else{
    newStr += str[i]
  }
  
}
console.log(newStr)
*/

// ? Q16: Check if two strings are rotations of each other
/*

function isRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let concat = str1 + str1; // abcdeabcde

  for (let i = 0; i <= concat.length - str2.length; i++) {
    let match = true;

    for (let j = 0; j < str2.length; j++) {
      if (concat[i + j] !== str2[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      return true;
    }
  }
  return false
}

let str1 = "abcde";
let str2 = "deabc";
console.log(isRotation(str1, str2));
*/

// ? Q1. First Non-Repeating Character in a String
/*
function firstNonRepeatingChar(str) {

  if(str.length === 0){
    return null
  }

  let frequency = {}

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if(!frequency[char]){
      frequency[char] = 1;
    }else{
      frequency[char]++
    }
    
  }

  for(let i = 0; i<str.length; i++){
    char = str[i]
    if (frequency[char] === 1) {
      return char
    }
  }
  return null
}

let str = "aabbcedff"
console.log(firstNonRepeatingChar(str))
*/

// ? Q. Find the Longest Word in a Sentence (without using inbuilt split method)
/*
function LongestWord(str) {
  let frequency = {};

  let word = "";
  for (let i = 0; i < str.length; i++) {
    
    if (str[i] === " ") {
      if(!frequency[word]){
        frequency[word] = word.length
        word = ""
      }
    }else{
      word += str[i]
    }
  }

  if(!frequency[word]){
    frequency[word] = word.length
  }
  
  let longest = ""
  for(i in frequency){
    if(frequency[i] > (frequency[longest] || 0)){
      longest = i
    }
  }
  return longest
}

let str = "I love solving javascript problems";
console.log(LongestWord(str))
*/
/*
let str = "I love solving javascript problems";
let arr = str.split(" ")
let max = arr[0];

for(let elem of arr){
  if(elem.length > max.length){
    max = elem
  }
}
console.log(max)
*/
// let str = "I love solving javascript problems";
// let arr = str.split(" ").map(elem => elem.length)
// console.log(Math.max(...arr))

/*!
function LongestWord(str) {
  let longest = "";
  let current = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      current += str[i]; // add character to current word
    } else {
      // end of a word
      if (current.length > longest.length) {
        longest = current; // update longest word
      }
      current = ""; // reset current word
    }
  }

  // Check last word (because it may not end with space)
  if (current.length > longest.length) {
    longest = current;
  }

  return longest;
}

let str = "I love solving javascript problems";
console.log(LongestWord(str)); // Output: "javascript"
*/

// ? First Non-Repeating Character
/*
function firstNonRepeatingChar(str){

  if(str.length === 0){
    return null
  }

  let frequency = {}

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if(!frequency[char]){
      frequency[char] = 1;
    }else{
      frequency[char]++
    }
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (frequency[char] === 1) {
      return char;
    }
  }

  return null
}

let str = "aabbccdeff"
console.log(firstNonRepeatingChar(str))
*/

// ? Question: Remove Duplicate Characters
/*
function removingDulicates(str) {

  if(str.length === 0){
    return ""
  }

  let newStr = ""
  for(let i = 0; i<str.length; i++){
    let alreadyIn = false;
    for (let j = 0; j < newStr.length; j++) {
      if(str[i] === newStr[j]){
        alreadyIn = true;
        break;
      }
      
    }
    if(!alreadyIn){
      newStr += str[i]
    }
  }
  return newStr
}

let str = "programming"
console.log(removingDulicates(str))
*/

// ? Q: Return the length of the longest word in the string (without using .split() or inbuilt methods).
/*
function LongestWordLength(str) {
  if (str.length == 0) {
    return 0;
  }

  let longest = "";
  let current = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      current += str[i];
    } else {
      if (current.length > longest.length) {
        longest = current;
      }
      current = "";
    }
  }
  if (current.length > longest.length) {
    longest = current;
  }
  return longest.length;
}

let str = "I love solving javascript problems";
console.log(LongestWordLength(str));
*/

// ? Q2: Reverse Each Word in a Sentence (without using inbuilt split, reverse, or join)
// ! o/p : "I evol tpircsavaj"
/*
function reverseEachWord(str) {
  if (str.length === 0) {
    return 0;
  }

  let word = "";
  let revStr = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {

      for (let j = word.length - 1; j >= 0; j--) {
        revStr += word[j];
      }

      if (i !== str.length) {
        revStr += " ";
      }

      word = "";
      
    } else {
      word += str[i];
    }
  }

  return revStr;
}

let str = "I love javascript";

console.log(reverseEachWord(str));
*/

// ? Remove duplicates from string
/*
var removeDuplicateLetters = function (s) {
  if (s.length === 0) return 0;

  let t = "";

  for (let i = 0; i < s.length; i++) {
    let alreadyIn = false;
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        alreadyIn = true;
        break;
      }
    }

    if (!alreadyIn) {
      t += s[i];
    }
  }

  return t;
};
console.log(removeDuplicateLetters("cbacdcbc"));
*/

// ? Q. First non-repeating character of given string
/*
Input: s = "racecar"
Output: 'e'
Explanation: 'e' is the only character in the string which does not repeat.

Input: "aabbccc"
Output: '$'
Explanation: All the characters in the given string are repeating.
*/
/*
function firstNonRepeatingChar(s) {
  if (s.length === 0) {
    return 0;
  }

  let frequency = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!frequency[char]) {
      frequency[char] = 1;
    } else {
      frequency[char]++;
    }
  }
  console.log(frequency);
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (frequency[char] === 1) {
      return i;
    }
  }
  return -1
}

let s = "racecar";
console.log(firstNonRepeatingChar(s));
*/

// ? Q. 151. Reverse Words in a String
/*
Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/
/*!
function reverseStringWords(s) {
  if (s.length === 0) {
    return 0;
  }

  let revstr = "";
  let word = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      word += s[i];
      // console.log(word)
    } else {
      if (word.length > 0) {
        for (let j = word.length - 1; j >= 0; j--) {
          revstr += word[j];
        }
        revstr += " ";
        word = "";
      }
    }
  }
  // Handle the first word (at start of string)
  if (word.length > 0) {
    for (let j = word.length - 1; j >= 0; j--) {
      revstr += word[j];
    }
  }
  

  return revstr.trim();
}

let s = "a good   example";
console.log(reverseStringWords(s));
*/

// ? Q17. Check if a no. is an armstrong number ?

/*
Input: n = 153
Output: true
Explanation: 153 is an Armstrong number, 1*1*1 + 5*5*5 + 3*3*3 = 153

Input: n = 9474
Output: true
Explanation: 94 + 44 + 74 + 44 = 6561 + 256 + 2401 + 256 = 9474

Input: n = 123
Output: false
Explanation: 1³ + 2³ + 3³ = 1 + 8 + 27 = 36
*/
/*
function isArmstrong(n) {
  let original = n;
  let nCopy = n;
  let count = 0;
  while (nCopy > 0) {
    nCopy = Math.floor(nCopy / 10);
    count++;
  }

  let num = 0;

  while (n > 0) {
    let digit = n % 10;
    num += digit ** count;
    n = Math.floor(n / 10);
  }
  if (original === num) {
   return true
  }else{
    return false
  }

}

let n = 1634;
console.log(isArmstrong(n));
*/

// ?! Q18. Rotate an array to the right by K Steps.
// ! NOT DONE YET.....
/*
Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/
/*
var rotate = function (nums, k) {
  let left = 0;
  let right = nums.length - 1;

  while(left < right){
    let temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp;

    left++;
    right--;
  }

  

  return nums;
};

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotate(nums, k));
*/

// ? Q 20. Move all zeros to the end of an array.

/*
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/
/*
var moveZeroes = function(nums) {
  let arr = [];

  for(let i of nums){
    if(i !== 0){
      arr.push(i)
    }
  }

  for(let i of nums){
    if(i === 0){
      arr.push(i)
    }
  }
  return arr
};

let nums = [0,1,0,3,12];
console.log(moveZeroes(nums))
*/
/*
var moveZeroes = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  while (count < nums.length) {
    nums[count++] = 0
  }

  return nums;
};

let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
*/

// ? Q 23. Count vowels and consonanats in a string.
/*
Example 1
Input: str = "geeks for geeks"
Output:
Vowels: 5
Consonants: 8

Example 2
Input: str = "abcdefghijklmnopqrstuvwxyz"
Output:
Vowels: 5
Consonants: 21
*/
/*
function vowelsAndConsonantsCount(s){
  let vowelCount = 0;
  let consonantsCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u") {
      vowelCount++;
    } else if(s[i] === " "){
      continue;
    }else{
      consonantsCount++
    }
    
  }
  return `Vowel Count : ${vowelCount} and Consonants Count : ${consonantsCount}`
}
let s = "abcdefghijklmnopqrstuvwxyz"
console.log(vowelsAndConsonantsCount(s))
*/
/*
function vowelsAndConsonantsCount(s) {
  let vowelCount = 0;
  let consonantsCount = 0;

  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);

    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u" ||
      s[i] === "A" ||
      s[i] === "E" ||
      s[i] === "I" ||
      s[i] === "O" ||
      s[i] === "U"
    ) {
      vowelCount++;
    } else if (ascii > 47 && ascii < 58) {
      continue;
    } else if (ascii === 32) {
      continue;
    } else {
      consonantsCount++;
    }
  }
  return `Vowel Count : ${vowelCount} and Consonants Count : ${consonantsCount}`;
}
let s = "abcdefghijkl  mnop   qrstu    v12345wxyz";
console.log(vowelsAndConsonantsCount(s));
*/
/*!
// ? Most Prefered one.
function vowelsAndConsonantsCount(s) {
  let vowelCount = 0;
  let consonantsCount = 0;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    let ascii = s.charCodeAt(i);

    // Check if character is a letter (A-Z or a-z)
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      // Check if it's a vowel
      if (
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u" ||
        ch === "A" ||
        ch === "E" ||
        ch === "I" ||
        ch === "O" ||
        ch === "U"
      ) {
        vowelCount++;
      } else {
        consonantsCount++;
      }
    }
    // Ignore digits, spaces, and symbols
  }

  return `Vowel Count: ${vowelCount} and Consonant Count: ${consonantsCount}`;
}

let s = "11abcdefghijkl  mnop   qrstu    v12345wxyz";
console.log(vowelsAndConsonantsCount(s));
*/

// ? Q22. Check if a no. is a perfect square.
/*
Input  : n = 36
Output : Yes

Input : n = 2500
Output : Yes
Explanation: 2500 is a perfect square of 50

Input  : n = 8
Output : No
*/
/*
function isPerfectSquare(n){
  if(n < 0) return false;

  for (let i = 1; i*i <= n; i++) {
    if(i**i === n){
      return true
    }
  }
  return false
}
let n = 10
console.log(isPerfectSquare(n))
*/

// ? Q. 169. Majority Element
/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/
/*
var majorityElement = function (nums) {
  let frequency = {};
  majorityCount = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    let elem = nums[i];
    if (!frequency[elem]) {
      frequency[elem] = 1;
    } else {
      frequency[elem]++;
    }

    // Check majority condition right here
    if (frequency[elem] > majorityCount) {
      return elem;
    }
  }

  return -1;
};
let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
*/

// ? left rotation of an array by 1 element
/*
function leftRotationArray(arr){

  let copy = arr[0]
  for(let i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = copy
  
  return arr
}

let arr = [1,2,3,4,5]
console.log(leftRotationArray(arr))
*/

// ? Right rotation of an array by 1 element
/*
function rightRotationArray(arr){

  let copy = arr[arr.length - 1]
  for(let i = arr.length - 1; i > 0; i--){
    arr[i] = arr[i - 1]
  }
  arr[0] = copy
  return arr
}

let arr = [1,2,3,4,5]
console.log(rightRotationArray(arr))
*/

// ? Left rotation of an array by k element
/*
function leftRotationArray(arr) {
  let k = 9
  k = k % arr.length;
  for (let j = 0; j < k; j++) {
    let copy = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = copy;
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(leftRotationArray(arr));
*/

// ? Right rotation of an array by k element
/*
function rightRotationArray(arr) {
  let k = 9;
  k = k % arr.length;
  for (let j = 0; j < k; j++) {
    let copy = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = copy;
  }

  return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(rightRotationArray(arr));
*/

// ? Left rotation of an array by k element
// Space complexity : O(n)
/*
function leftRotationArray(arr) {
  let temp = [];
  let k = 3;
  k = k % arr.length;

  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length];
  }
  return temp;
}

let arr = [1, 2, 3, 4, 5];
console.log(leftRotationArray(arr));
*/

// ? Right rotation of an array by k element
// Space complexity : O(n)

/*
function rightRotationArray(arr) {
  let k = 2;
  k = k % arr.length;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[(i + k) % arr.length] = arr[i];
  }

  return temp;
}

let arr = [1, 2, 3, 4, 5];
console.log(rightRotationArray(arr));
*/

// ? Q. Second largest element in an array.
/*
function secondLargest(arr){
  if(arr.length < 2) return null;

  let largest = arr[0];
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }else if(arr[i] > secondLargest  && arr[i] < largest){
      secondLargest = arr[i]
    }
    
  }
  return secondLargest === -Infinity ? null : secondLargest;
}

let arr = [40,40,40,40]
console.log(secondLargest(arr))
*/

// ? Q. Reverse an array without using extra space
// ! Here we will use Two pointers approch.
// ! One pointer will be at starting of an array that will increment by 1 and
// ! One pointer will be at ending of an array that will decrement by 1

/*
function reverseArray(arr) {
  if (arr.length < 2) return arr;

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

let arr = [10, 20, 30, 40, 50];
console.log(reverseArray(arr));
*/

// ? Q. move zeroes and one's one side of an array
/*
function moveZeroes(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++
    }
  }
  return arr;
}

let arr = [0, 1, 0, 1, 0, 1, 0, 1];
console.log(moveZeroes(arr));
*/

// ? Q 20. Move all zeros to the end of an array.

/*
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/
/*
function moveZeroes(arr){

  let j = 0;
  for(let i = 0; i<arr.length; i++){
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++
    }
  }  

  return arr
}

let nums = [0,1,0,3,12];
console.log(moveZeroes(nums))
*/

// ? Q. move all the negatives to the left and positives to the right of an array.
/*
Input: [-12, 11, -13, -5, 6, -7, 5, -3, -6]
Output: [-12, -13, -5, -7, -3, -6, 11, 6, 5]
*/
/*
function moveNegativesAndPositives(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}

let arr = [4, 5, -1, -2, 8, 2];
console.log(moveNegativesAndPositives(arr));
*/

// ? Left rotation of an array by k element

/*
function leftRotationArray(arr, k) {
  k = k % arr.length;

  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);

  return arr;
}

let arr = [1, 2, 3, 4, 5];
let k = 3;
console.log(leftRotationArray(arr,k));

function reverse(arr, i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}
*/

// ? Right rotation of an array by k element

/*
function rightRotationArray(nums,k) {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k-1)
  reverse(nums, k, nums.length - 1);

  return nums;
}

let nums = [1,2,3,4,5];
let k = 3
console.log(rightRotationArray(nums,k));

function reverse(nums,i,j) {
  while (i < j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
}
*/

// ? Q26. Remove Duplicates from Sorted Array
/*
Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
/*
var removeDuplicates = function (nums) {
  if (nums.length < 2) return 1;

  let j = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
  }
  return j;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums))
*/

// ? Q121. Best Time to Buy and Sell Stock
/*
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/
/*
var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    let profit = prices[i] - min;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
*/

// ? Q. Simple Merge sorted array.
/*
let arr1 = [2, 4, 6, 8, 9];
let arr2 = [1, 3, 5, 7, 8, 9];
let temp = [];

let i = 0;
let j = 0;
let k = 0;
while (i  < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    temp[k] = arr1[i];
    i++;
  } else {
    temp[k] = arr2[j];
    j++;
  }
  k++;
}

while (i < arr1.length) {
  temp[k] = arr1[i];
  i++;
  k++;
}
while (j < arr2.length) {
  temp[k] = arr2[j];
  j++;
  k++;
}
console.log(temp);
*/

// ? Q88. Leetcode Merge Sorted Array
/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
*/
/*
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let idx = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums2[j] > nums1[i]) {
      nums1[idx] = nums2[j];
      idx--;
      j--;
    } else {
      nums1[idx] = nums1[i];
      idx--;
      i--;
    }
  }

  while (j >= 0) {
    nums1[idx] = nums2[j];
    j--;
    idx--;
  }

  return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0, 0, 0];
let nums2 = [2, 5, 6, 7, 8];
let m = 3;
let n = 5;
console.log(merge(nums1, m, nums2, n));
*/

// ? Q75. Sort Colors
/*
Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
*/
/*
var sortColors = function(nums) {
  let i = 0;
  let j = 0; 
  let k = nums.length - 1;

  while(i <= k){
    if (nums[i] === 0) {
      [nums[j],nums[i]] = [nums[i],nums[j]];
      i++;
      j++;
    }else if(nums[i] === 2){
      [nums[i],nums[k]] = [nums[k],nums[i]];
      k--;
    }else{
      i++
    }
  }
return nums

};
let nums = [2,0,2,1,1,0]
console.log(sortColors(nums))
*/

// ? Q53. Maximum Subarray
/*
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
*/
/*
var maxSubArray = function(nums) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    maxSum = Math.max(currentSum,maxSum)
    if(currentSum < 0){
      currentSum = 0;
    }
  }
  return maxSum
};
let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))
*/

// ? Q. Reverse integer LeetCode:
/*
var reverse = function (x) {
  let rev = 0;
  let sign = x < 0 ? -1 : 1; // store the sign
  let xCopy = Math.abs(x); // work with absolute value

  while (xCopy > 0) {
    let digit = xCopy % 10;

    // Overflow check before pushing new digit
    if (
      rev > Math.floor(2147483647 / 10) ||
      (rev === Math.floor(2147483647 / 10) && digit > 7)
    ) {
      return 0; // overflow
    }

    rev = rev * 10 + digit;
    xCopy = Math.floor(xCopy / 10);
  }

  return rev * sign; // restore sign
};

console.log(reverse(-123));
*/

// ? Q. Two Sum Optimized Approch
/*
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let pairToFind = target - nums[i];
    if (map[pairToFind] && map[pairToFind] !== i) {
      return [i, map[pairToFind]];
    }
  }

  return [];
};
*/

// ? 283. Move Zeroes
/*
Given an integer array nums, move all 0's to the end of it 
while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
*/
/*
var moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
};
*/

// ? 136. Single Number
/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/
// ? Solution 1
/*
var singleNumber = function (nums) {
  let frequency = {};

  for (let i = 0; i < nums.length; i++) {
    let elem = nums[i];
    if (!frequency[elem]) {
      frequency[elem] = 1;
    } else {
      frequency[elem]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let elem = nums[i];
    if (frequency[elem] === 1) {
      return elem;
    }
  }

  return frequency;
};

let nums = [2, 2, 3, 3, 4];
console.log(singleNumber(nums));
*/
// ? Solution 2 : Using XOR operator
// ! XOR logic:
// ! a ^ a = 0
// ! a ^ 0 = a
// ! Order doesn’t matter (a ^ b ^ a = b)
/*
var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};

let nums = [2, 2, 3, 3, 4];
console.log(singleNumber(nums));
*/

// ? 268. Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
/*
Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2
Explanation:
n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
*/
/*
var missingNumber = function (nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;

  let currentArrSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentArrSum += nums[i];
  }

  return totalSum - currentArrSum;
};

let nums = [3,0,1]
console.log(missingNumber(nums));
*/

// ? 2942. Find Words Containing Character
/*
You are given a 0-indexed array of strings words and a character x.
Return an array of indices representing the words that contain the character x.
Note that the returned array may be in any order.

Example 1:
Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

Example 2:
Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
*/

// ! Using Built in methods
/*
var findWordsContaining = function (words, x) {
  let res = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      res.push(i);
    }
  }
  return res;
};

let words = ["leet", "code"];
let x = "e";
console.log(findWordsContaining(words, x));
*/

// ! Without Built in methods
/*
var findWordsContaining = function (words, x) {
  let res = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (word[j] === x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
};

let words = ["abc","bcd","aaaa","cbc"];
let x = "a";
console.log(findWordsContaining(words, x));
*/

/*
? 704. Binary Search
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/
/*
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let middle = Math.floor((right + left) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target < middle) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
console.log(search(nums, target));
*/

// Will Add some more code here.. Soon