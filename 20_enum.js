var Days;
(function (Days) {
    Days[Days["sunday"] = 1] = "sunday";
    Days[Days["monday"] = 2] = "monday";
    Days[Days["tuesday"] = 3] = "tuesday";
    Days[Days["wednesday"] = 4] = "wednesday";
    Days[Days["thrusday"] = 5] = "thrusday";
    Days[Days["friday"] = 6] = "friday";
    Days[Days["saturday"] = 7] = "saturday";
})(Days || (Days = {}));
var today = Days.tuesday;
console.log("Assigned for today is " + today);
