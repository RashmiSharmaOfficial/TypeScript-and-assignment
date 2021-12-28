export{}

var no:number = 5
var ifact = 1

for(var i = no; i > 1; i--){
    ifact = ifact*i
}

console.log(`Factorial of ${no} is ${ifact}`)