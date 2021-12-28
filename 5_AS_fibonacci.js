"use strict";
exports.__esModule = true;
//fibonacci 0 1 1 2 3 5
var fnum = 0;
var snum = 1;
console.log(fnum);
console.log(snum);
for (var i = 0; i < 8; i++) {
    var tnum = fnum + snum;
    console.log(tnum);
    fnum = snum;
    snum = tnum;
}
