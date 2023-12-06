function solution(arr){
    if(arr.includes(-1)){
        const filtered = arr.filter(num => num !== -1)
        filtered.sort((a,b) => a-b)
        for(let i =0; i < arr.length; i++){
            if (arr[i] !== -1){
                arr[i] = filtered[0]
                filtered.splice(0, 1)
            }
        }
    } else arr.sort((a, b) => a - b ) //sorting array from least to greatest

    return arr
}

console.log(solution([-1, 190, 150, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))

function countVowels(string){
    let vowels = 'aeiouAEIOU'.split(''); //creating our vowels variable
    let count = 0 //setting the default count to 0

    string.split('').forEach(function(e){ //splitting our string into individual characters
    if(vowels.indexOf(e) >= 0){ //setting up the if statement to confirm if vowels are present and then counting them
    count++;}});

    return count //returning the number of vowels counted
}

const input1 = 'Hello, World!'
console.log(countVowels(input1)); // Output: 3

const input2 = 'Counting Vowels';
console.log(countVowels(input2)); // Output: 5

const input3 = "turtles"
console.log(countVowels(input3)) // Output: 2

const input4 = "MISSISSIPPI"
console.log(countVowels(input4)) // Output: 4



// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

function findSumOfTwo(numbers, target) {
    for (i = 0; i < numbers.length; i++){
        for(j = 1; j < numbers.length; j++){
            if (numbers[i] + numbers[j] === target){
                return [numbers[i], numbers[j]]
            }
        }
    }
    return []
}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 10)); // Output: [3, 5] 

console.log(findSumOfTwo([5, 12, 3, 9, 1], 30)); // Output: [3, 5] 