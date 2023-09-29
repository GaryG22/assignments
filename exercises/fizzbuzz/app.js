function fizzBuzz(n) {
    // Declare array to store the results in.
    let result = []

    // Loop from 1 to n 
    for(let i = 1; i <= n; ++i) {
        // Check if i is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0 ) {
            //add "fizzbuzz" to result array
            result.push("fizzbuzz")
        }

    // Check if i is divisible by 3
    else if (i % 3 === 0) {
        //add "fizz" to result array
        result.push("fizz")
    }

    // Check if i is divisible by 5
    else if ( i % 5 === 0 ) {
        //add "buzz" to result array
        result.push("buzz")
    }

    else {
    // Add the current number as a string to the result array
    result.push (i.toString())
    }
    }
    //return result array
    return result
}
//driver code
let n = 100

// Call the fizzBuzz function to get the result
let result = fizzBuzz(n)

// Print the result
console.log(result.join(' '))