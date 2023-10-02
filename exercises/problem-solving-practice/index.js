function largest(n){

let num = 0

    for(i = 0; i < n.length; i++) {
        if (n [i] >= num ) {
            num = n[i]
        }
    }
    return num
}
console.log(largest([6, 13, 250, 3])); // => 250
console.log(largest([3, 5, 2, 8, 1])); // => 8
console.log(largest([-13, 40, 3, 0, 19, 22])); // => 40

function lettersWithStrings(a, b) {
    
    for (i = 0; i < a.length; i++){
        if (a[i].includes(b)) {
            console.log(a[i])
        }
    }
}
//console.log(
    lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")//) // => ["$hello!", "test!"]
//console.log(
    lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")//)  // => ["C%4!", "Hey!"]
//console.log(
    lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h")//)  // => []

function isDivisible(a, b) {
    if ( a % b === 0) {
        return true
    } else return false
}

// test data
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false