const total = [1,2,3] // 6

const result1 = total.reduce(function(final, num){
    final += num
    return final
},0)
console.log(result1)

 
 const stringConcat = [1,2,3] // "123"

 const result2 = stringConcat.reduce(function(final, num){
    final += num
    return final
 },"")
 console.log(result2)

 
 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
 const totalVotes = voters.reduce(function(final, voter){
    if (voter.voted){
        final++
    }
    return final
 },0)
 console.log(totalVotes)

 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];

 const shoppingSpree = wishlist.reduce(function(final, total){
    return final + total.price
 },0)
 
 console.log(shoppingSpree); // 227005

 
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
 const flatten = arrays.reduce(function(final, array){
    return final + array 
 })
 
 console.log(flatten); // ["1", "2", "3", true, 4, 5, 6];

 
 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voterResults = voters.reduce(function(final, voter){
    if(voter.voted && voter.age >= 18 && voter.age <= 25){
        final.numYoungVotes++
    }
    if (voter.age >= 18 && voter.age <= 25){
        final.numYoungPeople++
    }
    if(voter.voted && voter.age >= 26 && voter.age <= 35){
        final.numMidVotesPeople++
    }
    if (voter.age >= 26 && voter.age <= 35){
        final.numMidsPeople++
    }
    if(voter.voted && voter.age >= 36 && voter.age <= 55){
        final.numOldVotesPeople++
    }
    if (voter.age >= 36 && voter.age <= 55){
        final.numOldsPeople++
    }
        return final
},{numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0})

console.log(voterResults); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
