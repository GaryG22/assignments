var capilizeAndLowercase = "HelLo" // => "HELLOhello"
console.log(capilizeAndLowercase.toUpperCase () + capilizeAndLowercase.toLowerCase())

var str = "Hello"
var findMiddleIndex = Math.floor(str.length / 2)  // => 2
console.log(findMiddleIndex) 

var str1 = "Hello World"
var findMiddleIndex = Math.floor(str1.length / 2) // => 5
console.log(findMiddleIndex)

var str2 = "Hello"
var returnFirstHalf = str2.slice(0, str2.length / 2) // => "He"
console.log(returnFirstHalf)

var str3 = "Hello World"
var returnFirstHalf = str3.slice(0, str3.length / 2 ) // => "Hello"
console.log(returnFirstHalf)

var str4 = "Hello"
var str4_len = str4.length
var capilizeAndLowercase = ""

for ( var i = 0; i < Math.floor(str4_len / 2 ); i++) {
    capilizeAndLowercase += str4[i].toUpperCase()
}   
for (var i = Math.floor(str4_len / 2); i < str4_len; i++) {
    capilizeAndLowercase += str4[i]
}
console.log(capilizeAndLowercase) // => "HEllo"

var str5 = "Hello World"
var str5_len = str5.length
var capilizeAndLowercase = ""

for ( var i = 0; i < Math.floor(str5_len / 2 ); i++) {
    capilizeAndLowercase += str5[i].toUpperCase()
}   
for (var i = Math.floor(str5_len / 2); i < str5_len; i++) {
    capilizeAndLowercase += str5[i]
}
console.log(capilizeAndLowercase) // => "HELLO world"


