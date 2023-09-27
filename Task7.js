function reverseNumber(n) {
    var reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return reversed;
}

var x = 32243;
console.log(reverseNumber(x));  // Outputs: 34223


