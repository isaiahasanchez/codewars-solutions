// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

/* 
P
a number that is non negative 

R
the addition of all the 1's in the binary representation

E
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

P
convert number to binary 
turn number to string
split the string 
iterate through each and convert back to number
iterate through each and reduce them 
*/

var countBits = function(n) {
    let binary = n.toString(2)
    let added = binary.split('').map(Number).reduce((acc,curr) => acc + (curr > 0 ? curr : 0))
    return added
  };

  console.log(countBits(1234));