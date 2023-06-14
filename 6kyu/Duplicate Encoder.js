/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

P-
strings of letters both lower and uppercase

R-
returns (for characters that appear once and ) for characters that appear twice or more

Examples-
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

P-
split into array 
iterate each character and push to empty array
check to see if it appears more then once in the array 
if so replace with ()

*/
function duplicateEncode(word) {
    let split = word.split('').map(ch => ch.toLowerCase());
    let final = [];
  
    for (let ch of split) {
      if (split.indexOf(ch) === split.lastIndexOf(ch)) {
        final.push('(');
      } else {
        final.push(')');
      }
    }
  
    return final.join('');
  }
  
  console.log(duplicateEncode('succesS'));
  