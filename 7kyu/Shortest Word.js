/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


P
a string of words of varying lengths

R
returns the length of the shortest word

E
"dog taco panda" --> 3

P
split string 
reduce it to a single length 
*/

function findShort(s){
    return s.split(' ').reduce((acc, curr)=> acc.length < curr.length ? acc : curr).length
}

console.log(findShort("dog taco panda"));