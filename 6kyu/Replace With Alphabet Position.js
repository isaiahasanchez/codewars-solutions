/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

P
A string

R
return a string with each letter replaced with its position in the alphabet

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

Pseudocode
create a function that takes a string
list the alphabet as a string
create an empty string
loop through the string
  if the character matches the letter return its index
    add the position of the letter to the empty string
return the string
*/

function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseText = text.toLowerCase();
    let result = '';
  
    for (let i = 0; i < lowercaseText.length; i++) {
      const currentChar = lowercaseText[i];
      const position = alphabet.indexOf(currentChar) + 1;
  
      if (position > 0) {
        result += position + ' ';
      }
    }
  
    return result.trim();
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."));

