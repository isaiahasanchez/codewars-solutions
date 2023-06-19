/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

P
a array of at least 3 integers with all being even or odd except one

R
return the exception integer 

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

P
create empty arrays for even and odd
iterate through array 
for each check if its even or odd 
if even push that number to even 
if odd push to odd
check to see which array.length is larger 
return the smaller one [0]

*/

function findOutlier(integers){
  let odd = []
  let even = []
  for (let num of integers){
    if( num % 2 == 0 ){
        even.push(num)
    } else if ( num % 2 !== 0){
        odd.push(num)
    }
  }
  return odd.length > even.length ? even[0] : odd[0]
}


console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));