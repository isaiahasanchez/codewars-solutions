/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

P
two strings one the string and the second the ending str

R
must return true if the second string is equal to the ending of the first

Examples:


solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false


*/
// My Solution 
function solution(str, ending){
    if(ending.length < 1) return true
    else {
      let length = ending.length
      let end = str.slice(-length)
      return ending == end
    }
  }

  // Best voted solution
  function solution(str, ending){
    return str.endsWith(ending);
  }


  console.log(solution('abc', 'bc'));