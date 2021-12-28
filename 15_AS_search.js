var searchArr = new Array(2, 4, 5, 7, 23, 56);
var element1 = 7, flag1 = 0;
var element2 = 17, flag2 = 0;
for (var h in searchArr) {
    if (element1 == searchArr[h]) {
        flag1 = 1;
        console.log(element1 + " found at index " + h);
    }
    if (element2 == searchArr[h]) {
        flag2 = 1;
        console.log(element1 + " found at index " + h);
    }
}
if (flag1 == 0) {
    console.log(element1 + " not found");
}
if (flag2 == 0) {
    console.log(element2 + " not found");
}
