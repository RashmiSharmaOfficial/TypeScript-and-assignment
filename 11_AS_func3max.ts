
var num1 = 5, num2 = 7, num3 = 10
var max1 = 0

function threeMax(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        max1 = num1
    }
    else if(num2 > num1 && num2 > num3){
        max1 = num2
    }
    else{
        max1 = num3
    }

    return max1
}
console.log(`Max of ${num1}, ${num2}, ${num3} is ${threeMax(num1, num2, num3)}`)
