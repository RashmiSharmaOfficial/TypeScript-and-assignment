let unionData : number|string
unionData = 200
console.log(`data in variable is: `+unionData)

unionData = 'hello world'
console.log(`modified data ${unionData}`)

function disp(uniondata1:(number|string)){
    if(typeof(uniondata1) == "number"){
        console.log(`datatype is number ${uniondata1}`)
    }
    else if(typeof(uniondata1) == "string"){
        console.log(`datatype is string ${uniondata1}`)
    }
}
disp(120)
disp('hello')