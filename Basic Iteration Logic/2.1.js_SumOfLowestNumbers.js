// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function SumOfLowestNumbers(arr) {
    let min1 = arr[0],
        min2 = arr[1];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] < min1 && arr[i] > min2) {
            min1 = arr[i];
        } else if (arr[i] < min2 && arr[i] > min1) {
            min2 = arr[i];
        } else if (arr[i] < min1 && arr[i] < min2) {
            if (min1 <= min2) {
                min2 = arr[i];
            } else {
                min1 = arr[i];
            }
        }
    }
    return min1 + min2;
}
let numArr = [111, 10, 222, 11, 5, 4545];
console.log(SumOfLowestNumbers(numArr));
