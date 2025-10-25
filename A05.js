
// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
// *
// * *
// * * *
// * * * *
// * * * * *

// for (let i = 0; i<=5 ; i++){
//     let pattern = "";
    
//     for(j=0; j <= i; j++){
//         pattern += " * "
//     }

//     console.log(pattern);
// }

// 2. Craete Multiplication Table (Using for loop)
// Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30

// given number
// let N = 3;

// // loop from 1 to 10
// for (let i = 1; i <= 10; i++) {
//   console.log(`${N} x ${i} = ${N * i}`);
// }



// // 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
// for ( let i=1;i<=500 ; i++){

// if (i %2 !== 0){
//     console.log("the odd number is", i);
// }
// }



// Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.

for (let i=1 ; i <= 20; i++){
    if (i%3 === 0) continue;
    console.log(i)
}


// Reverse Digits of a Number (Using while loop)
// Write a program to reverse the digits of a given number using a while loop.
// Example:
// Input: 6789
// Output: 9876

let input = 123456;
console.log(`the input number is ${input}`)
let output = 0;
while (input>0){
    let remainder = input % 10;
    input = Math.floor(input/10);
    output = output * 10 +remainder; 
}

console.log(`the output number is ${output}`)


