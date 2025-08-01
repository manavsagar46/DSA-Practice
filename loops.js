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
