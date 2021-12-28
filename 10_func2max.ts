function max(num1, num2){
    var iMax:number = 0

    if(num1 > num2){
        iMax = num1
    }
    else{
        iMax = num2
    }

    return iMax
}

var iresult = max(235, 560)
console.log(`maximum of 235 and 560 is ${iresult}`)