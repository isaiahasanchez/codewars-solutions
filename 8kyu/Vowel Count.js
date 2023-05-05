// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let total = 0
    for (let i = 0; i <= str.length; i++){
      if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ){
          total += 1
          }
    }
    return total
  }
// Alternative
  function getCount(str){
    return str.match(/[aeiou]/gi||[]).length
  }