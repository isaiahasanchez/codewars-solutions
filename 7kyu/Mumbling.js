/*
This time no story, no theory. The examples below show you how to write function accum:

P
A string of of letters from A-Z and a-z


R
return a string of the letters seperated by dashes with the first letter always capital and return the amount of letters as the index

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

P   
seperate the letters and undercase them
 and add dash where the space is
iterate over each letter and make sure the first letter is capital 
add each letter to a new line index amount of times
print the new line 

*/

function accum(s) {
	let split = s.split('').map(letter => letter.toLowerCase())
    let empty = []

    for (let i = 0; i < split.length; i++){
            empty.push(split[i].toUpperCase() + split[i].repeat(i))
    }

    return empty.join('-')
}

console.log(accum('RqaEzty'))

// Top Voted
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}