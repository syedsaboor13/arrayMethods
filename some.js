//24. some() Method

/*
the some() method checks if the least one element in an array passes a test(condition).It return true -> if any element passes the condition false -> if none do
*/

let arr1 = [2, 5, 7, 7, 8, 10]
let output1 = arr1.every((x)=> x%2==0) // false
let output2 = arr1.some((y)=> y % 2 ==0 ) // true
console.log(output2);