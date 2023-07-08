/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

P
a string a of words with different cases and punctuations

R
return the word with the first letter at the end and ending in ay keep punctuation

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

P
seperate the words 
splice the first letter of each words and add to end
add ay to the end of each word
keep punctuation mark untouched 
*/
function pigIt(str) {
    let split = str.split(' ');
    let words = [];
    let punctuation = '';
  
    for (let i = 0; i < split.length; i++) {
      let word = split[i];
      if (/[^a-zA-Z]/.test(word)) {
        punctuation += word;
      } else {
        let modifiedWord = word.slice(1) + word[0] + 'ay';
        words.push(modifiedWord);
      }
    }
  
    let result = words.join(' ');
  
    if (punctuation.length > 0) {
      result += ' ' + punctuation;
    }
  
    return result;
  }
  
  
  
  
  console.log(pigIt('Hello world what up!'));
  console.log(pigIt('Pig latin is cool'));