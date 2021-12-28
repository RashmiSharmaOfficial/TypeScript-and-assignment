var Days;
(function (Days) {
    Days[Days["Sunday"] = 1] = "Sunday";
    Days[Days["Monday"] = 2] = "Monday";
    Days[Days["Tuesday"] = 3] = "Tuesday";
    Days[Days["Wednesday"] = 4] = "Wednesday";
    Days[Days["Thrusday"] = 5] = "Thrusday";
    Days[Days["Friday"] = 6] = "Friday";
    Days[Days["Saturday"] = 7] = "Saturday";
})(Days || (Days = {}));
var today;
function assignDay(day) {
    today = day;
}
assignDay(Days.Tuesday);
console.log("Assigned for today is " + today);
