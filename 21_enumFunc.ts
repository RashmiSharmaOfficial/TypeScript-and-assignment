enum Days {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thrusday,
    Friday,
    Saturday
}

var today: number

function assignDay(day: Days): void {
    today = day
}

assignDay(Days.Tuesday)
console.log("Assigned for today is " + today)