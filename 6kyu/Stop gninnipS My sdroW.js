// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.



/* 
P 
given words with 5 or more letters per word
R
if the words are 5 or more letters return in reverse if not leave them
E

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"
P
seperate words by spaces 
if each word is 5 or more then reverse it if not return it
*/

function spinWords(string){
    let seperated = string.split(' ')
    let empty = []
    for (let word of seperated){
        if(word.length >= 5){
            empty.push( word.split('').reverse().join(''))
        }else empty.push(word) 
    } 
    return empty.join(' ')
  }

  console.log(spinWords('Hey fellow warriors'));
