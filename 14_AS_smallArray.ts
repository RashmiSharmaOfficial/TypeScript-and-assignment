var arr = new Array(1, 2, 5, 10)
var imin = arr[0]

for(var i2 in arr){
    if(imin > arr[i2]){
        imin = arr[i2]
    }
}

console.log(`minimum in ${arr} is : `,imin)
