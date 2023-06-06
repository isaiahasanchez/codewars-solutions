// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

/* 
P-
a string of x's and o's any case if anything else return true
R- should return a boolean
E- 
 XO("ooxx") => true
 XO("xooxx") => false
 XO("ooxXm") => true
 XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 XO("zzoo") => false

 P- count how many o and x and then compare the counts
*/

function XO(str) {
    let o = (str.match(/o/gi) || []).length;
    let x = (str.match(/x/gi) || []).length;
    return o === x;
  }
  

console.log(XO("ooxoxX"));