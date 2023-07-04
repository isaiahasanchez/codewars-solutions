/* 
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

P
must be a positive parameter number

R
returns the persistance value of that number until there is only a single digit 

For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

P 
convert numbers into string and split it 
check if number is less then 10 
if not iterate through and multiply all the contents 
then check again etc
once it is less then 10 return that number 
*/

function persistence(num) {
    let count = 0;
  
    while (num > 9) {
      num = num
        .toString()
        .split('')
        .reduce((a, b) => a * b, 1);
      count++;
    }
  
    return count;
  }
  

 console.log(persistence(39));