var num1 = 5, num2 = 7, num3 = 10;
var min1 = 0;
function threeMin(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        min1 = num1;
    }
    else if (num2 < num1 && num2 < num3) {
        min1 = num2;
    }
    else {
        min1 = num3;
    }
    return min1;
}
console.log("Max of " + num1 + ", " + num2 + ", " + num3 + " is " + threeMin(num1, num2, num3));
