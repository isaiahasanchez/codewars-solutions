// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
    // let empty = [];
    // let strToArray = str.toLowerCase().split('');
  
    // for (let char of strToArray) {
    //   if (empty.includes(char)) {
    //     return false;
    //   } else {
    //     empty.push(char);
    //   }
    // }
  
    // return true;
    let lowerCase = str.toLowerCase()

    for (let ch of lowerCase){
      if(lowerCase.indexOf(ch) !== lowerCase.lastIndexOf(ch)){
        return false
      } 
    }
    return true
  }
  
  console.log(isIsogram('Dermatoglyphics'));
  console.log(isIsogram('moose'));