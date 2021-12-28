var i, n, flag = 0;
n = 7;
for (i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
        flag = 1;
        break;
    }
}
if (n == 1) {
    console.log('1 is neither prime nor composite');
}
else {
    if (flag == 0) {
        console.log(n + " is prime number");
    }
    else {
        console.log(n + " is not a prime number");
    }
}
