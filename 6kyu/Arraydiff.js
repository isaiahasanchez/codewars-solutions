// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.



/* 
P- [a], [b] two whole integers  
R-  Shoul return integer a with all the numbers from integer b removed
E- arrayDiff([1,2],[1]) == [2]
 If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
P- iterate through list a 
check to see if one number is included in list b 
if it is remove it from list a 
return list a 
*/


function arrayDiff(a, b) {
    return a.filter(num => !b.includes(num));
  }
  

// console.log(arrayDiff([1,2,2,2,3],[2]));