// 17. every() Method
// checks if every element passes a test (returns true/false) Returns: true if all elements pass the condition, otherwwise false. It returns boolean values


let  num =[2, 4, 6, 8, 10];
let check = nem.every((x)=>x>0)
console.log(check);

or 

let  num1 =[2, 4, 6, 8, 10];
function test(x){
    return x>0
}
let check1 = num1.every(test)
console.log(check1);