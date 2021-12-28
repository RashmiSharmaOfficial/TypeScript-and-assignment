"use strict";
exports.__esModule = true;
function testScore() {
    var x = 10;
    var consData = 300;
    if (x <= 10) {
        var y = 40; //should be changed to var from let to remove error
        var z = 24;
    }
    console.log('Value of x is: ', x);
    console.log('Value of y is: ', y);
    // consData = 400 //const value cant be changed
}
testScore();
