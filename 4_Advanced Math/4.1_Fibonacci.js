// Ex4.1 - Fibonacci -
// “Write a function to return an n element in Fibonacci sequence” is one of the most common
// questions you can hear during the coding challenge interview part. In this blogpost I’m going to
// walk through the two of the most typical solutions for this problem and also cover a dreadful (for
// most of novice developers) topic of time complexity.
// So what is a Fibonacci sequence? According to Wikipedia :
// “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
// called the Fibonacci sequence, and characterized by the fact that every number after the first
// two is the sum of the two preceding ones.”
// Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like
// this:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// or this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

function fibonacciArray(n) {
    let fiboArr = [1, 1];
    if (n > 2) {
        for (let i = 2; i < n; i++) {
            fiboArr.push(fiboArr[i - 2] + fiboArr[i - 1]);
        }
        return fiboArr;
    } else if (n === 2) {
        return [1, 1];
    } else if (n === 1) {
        return [1];
    } else return `There no fibonacci !!!!`;
}
console.log(fibonacciArray(15));
