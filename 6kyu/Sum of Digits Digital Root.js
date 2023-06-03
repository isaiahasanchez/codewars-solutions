// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
// - Parameters→number
// - Returns→a single number of the digital root

// - Pseudocode→ split it into array
// iterate and add the contents of array 
// check if the array is split has more then one item
// if it does then repeat steps again if not return

// My solution
function digitalRoot(n){
    
 let splitOne = String(n).split('').map(Number).reduce((acc, curr) => acc +curr)

if(splitOne >9){
return digitalRoot(splitOne)

}
return splitOne
} 

// Top Rated 
function digital_root(n) {
    return (n - 1) % 9 + 1;
  }

