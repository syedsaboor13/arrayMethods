let letters = ['a', 'b', 'c', 'd'];

// The callback function takes the accumulator (prev) and the current value (cur)
let result = letters.reduceRight((prev, cur) => prev + cur);

console.log(result); 
// Expected output: "dcba" 
