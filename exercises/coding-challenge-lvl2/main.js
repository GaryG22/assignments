const sortNumbers = [4, 2, 7, 1, 9, 5]
sortNumbers.sort((a,b) => a-b)
console.log(sortNumbers)  // Output: [1, 2, 4, 5, 7, 9]

const convertToUppercase = ['hello', 'world', 'javascript']
const upperCase = convertToUppercase.map((string) => string.toUpperCase())
console.log(upperCase)  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']