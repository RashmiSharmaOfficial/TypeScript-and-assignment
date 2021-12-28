export{}

//fibonacci 0 1 1 2 3 5
var fnum:number = 0
var snum:number = 1

console.log(fnum)
console.log(snum)

for(var i = 0; i < 8; i++){
    var tnum = fnum+snum
    console.log(tnum)
    fnum = snum
    snum = tnum
}