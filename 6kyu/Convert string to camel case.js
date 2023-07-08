
/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

P
s string of words seperated by dashes or underscores
R
return the same words but in camel case format
Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

P
determine if the string contains dashes if so split by dashes 
detrmine if it contains _ if so split again
determine if the first letter was capitalizes if so dont touch it
then iterate through the string starting at the second word and slice the first letter and capitalize 
join back together

 
*/

function toCamelCase(str){
    if( str.includes('_') ){
        str = str.replace(/_/g, ' ')
    }
    
    if ( str.includes('-')){
        str = str.replace(/-/g, ' ')
    }
    return str
        .split(' ')
        .map((word, index, array)=>
        index <1 ? word:  word.slice(0,1).toUpperCase() + word.slice(1))
        .join('')
}

console.log(toCamelCase("the_stealth_warrior"));