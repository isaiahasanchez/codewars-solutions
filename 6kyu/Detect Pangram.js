/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

P
a string consisting of a sentence does not contain both upper and lowercase. No punctuation.

R
returns true if it is a pangram false if not

E
"The quick brown fox jumps over the lazy dog" --> true

P
lowercase the string
write the alphabet in string
for loop over the string
if the iterated letter in the string is included in alphabet
remove it from alphabet
if alphabet string is empty return true

*/


// My Solution
function isPangram(string){
    let lowercase = string.toLowerCase()
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0; i <lowercase.length; i++){
        if(alphabet.includes(lowercase[i])){
            alphabet = alphabet.replace(lowercase[i], '')
        }
    }
    return alphabet == ''
  }

  // Higher voted 
  function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }

  console.log(isPangram("The quick brown fox jumps over the lazy bog"));