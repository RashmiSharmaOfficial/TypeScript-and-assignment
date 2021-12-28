// var is function scoped and let is block scoped
export{}

function testScore(){
    let x:number = 10
    const consData:number = 300

    if(x <= 10){
        var y:number = 40 //should be changed to var from let to remove error
        var z:number = 24
    }

    console.log('Value of x is: ', x)
    console.log('Value of y is: ', y)
    // consData = 400 //const value cant be changed
}
testScore()
