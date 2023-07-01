/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


P
takes an array with various types of elements 
R
return the array with all the zeros moved to the end
E
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

P
iterate through the array
if the array contains a zero filter it out and add to a counter 
then push it to the end of the array 
*/

function moveZeros(arr) {
    let counter = 0
    for ( let ch of arr){
        if ( typeof ch == 'number'){
            if( ch == 0){
                counter += 1
            }
        }
    }
    let deletedArr = arr.filter(ch => ch !== 0)

    for(let i = 0; i < counter; i++){
        deletedArr.push(0)
    }
    return deletedArr
  }

  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

  //higher voted solution

  var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
  }