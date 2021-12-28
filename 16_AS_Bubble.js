var bubbleArr = new Array(5, 9, 23, 2, 7, 8, 78);
console.log("Array initially " + bubbleArr);
var n = bubbleArr.length;
for (var i3 = 0; i3 < n - 1; i3++) {
    for (var j2 = 0; j2 < n - i3 + 1; j2++) {
        if (bubbleArr[j2] > bubbleArr[j2 + 1]) {
            var temp = bubbleArr[j2];
            bubbleArr[j2] = bubbleArr[j2 + 1];
            bubbleArr[j2 + 1] = temp;
        }
    }
}
console.log("sorted array is " + bubbleArr);
