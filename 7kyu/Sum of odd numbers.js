// Given the triangle of consecutive odd numbers:

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// 31    33    35    37    39  41
// 43


// My Solution 
function rowSumOddNumbers(n) {
    let total = 0
	for (let i = 0; i < n*2; i++) {
        const startingPoint = n*(n-1) + 1
        let list = startingPoint + i
        if (list % 2 ==1){
            total += list
        }
    }
    return(total);
}

// Best Practices 

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
  } // lol