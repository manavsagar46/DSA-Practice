// ! =========== CONDITIONALS ============
// 1. Check if a number is positive, negative, or zero.
/*
let num = 0;
if(num > 0){
   console.log("Number is Positive")
}else if (num === 0){
   console.log("Number is Zero")
}else{
   console.log("Number is Negative")
}
*/

// 2. Check whether a number is even or odd.
/*
 let num = 7;
 if(num % 2 == 0){
    console.log("Even no.")
 }else{
    console.log("Odd no.")
 }
*/

// 3. Find the largest among two numbers.
/*
let a = 5, b = 10;
if(a>b){
   console.log(`${a} is greater than ${b}`)
}else{
   console.log(`${b} is greater than ${a}`)
}
*/

// 4. Check if a year is a leap year.
/*
let year = 2024;
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log(`${year} is a Leap year`);
    } else {
      console.log(`${year} is not a Leap year`);
    }
  } else {
    console.log(`${year} is a Leap year`);
  }
} else {
  console.log(`${year} is not a Leap year`);
}
*/

// 5. Check whether a character is a vowel or consonant.
//  vowels : a e i o u
/*
let char = "e";
if((char === "a") || (char === "e") || (char === "i") || (char === "o") || (char === "u") ){
   console.log(`${char} is a vowel`)
}else{
   console.log(`${char} is a consonant`)
}
*/

// 6. Find the largest among three numbers.
/*
let a = 5, b = 12, c = 8;

if(a>b){
   if(a>c){
      console.log(`${a} is greater among ${b} and ${c}`)
   }else{
      console.log(`${c} is greater among ${a} and ${b}`)
   }
}else{
   if(b>c){
      console.log(`${b} is greater among ${a} and ${c}`)
   }
   else{
      console.log(`${c} is greater among ${a} and ${b}`)
   }
}
*/

// 7. Create a grading system:
// Marks >= 90 → A
// Marks >= 75 → B
// Marks >= 60 → C
// Marks >= 45 → D
// Else → F
/*
let marks = 72;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 45) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}
*/

// 8. Check if a number is divisible by 3 and 5.
/*
let num = 15;
if((num % 3 == 0) && (num % 5 == 0)){
   console.log("Number is divisible by 3 and 5")
}else{
   console.log("Number is not divisible by 3 and 5")
}
*/

// 9. Use a switch statement to print the day of the week based on a number (1-7).
/*
let day = 3;
switch (day) {
   case 1:
      console.log("Monday")
      break;
   case 2:
      console.log("Tuesday")
      break;
   case 3:
      console.log("Wednesday")
      break;
   case 4:
      console.log("Thursday")
      break;
   case 5:
      console.log("Friday")
      break;
   case 6:
      console.log("Saturday")
      break;
   case 7:
      console.log("Sunday")
      break;
   default:
      console.log("Enter a valid day number")
      break;
}
*/

// 10. Determine if a number is in the range 1 to 100 (inclusive).
/*
let num = 67;
if((num >= 1) && (num <= 100)){
   console.log("Number is within the range 1 to 100")
}else{
   console.log("Number is not within the range 1 to 100")
}
*/

// 11. Check if a number is even or odd using ternary operator.
/*
let num = 9;
(num % 2 == 0) ? console.log("Number is Even") : console.log("Number is Odd");
// ? OR 
let result = (num % 2 == 0) ? "Even" : "Odd";
console.log(result)
*/

// 12. Print “Adult” if age >= 18, else “Minor” using ternary operator.
/*
let age = 16;
(age >= 18) ? console.log("Adult") : console.log("Minor")
// ? OR
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result)
*/

