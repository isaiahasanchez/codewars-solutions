
/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


P
letters or numbers of different case sensitivities.

R
Returns a number that signifies the amount of numbers or letters case insensitive that were repeated >1.

E

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

P
split into array 
create empty array 
create counter at 0
iterate through each and determine if it exist in the empty array if not push it
if it does exist then +1 to counter
if not then push into array

*/

function duplicateCount(text){
  let split = text.split('').map(ch => !isNaN(ch) ? ch : ch.toLowerCase() )
  let empty = []
  let emptyCounter = []
  for(let ch of split){
    if(!empty.includes(ch)){
        empty.push(ch)
    } else if( !emptyCounter.includes(ch)){
        emptyCounter.push(ch)
    }
  }
  return emptyCounter.length
}

console.log(duplicateCount('indivisibility'));
