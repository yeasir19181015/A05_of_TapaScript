
// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 0; i<=5 ; i++){
    let pattern = "";
    
    for(j=0; j <= i; j++){
        pattern += " * "
    }

    console.log(pattern);
}

// 2. Craete Multiplication Table (Using for loop)
// Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:

// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30

// given number
let N = 3;

// loop from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`${N} x ${i} = ${N * i}`);
}



// 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
