function pal(unionData) {
    var str;
    if (typeof (unionData) == 'number') {
        str = unionData.toString();
    }
    else {
        str = unionData;
    }
    var size = str.length;
    for (var i = 0; i < size / 2; i++) {
        if (str[i] !== str[size - i - 1]) {
            return "Not a Palindrome ";
        }
    }
    return "palindrome";
}
console.log("22 is " + pal(22));
console.log("123 is " + pal(123));
console.log("SAAS is " + pal('SAAS'));
console.log("PAAS is " + pal('PAAS'));
