// Ex 2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (
            (arr[i + 1] === arr[i + 2] && arr[i] != arr[i + 1]) ||
            i === arr.length - 1
        ) {
            return arr[i];
        }
    }
}

console.log(findUnique([1, 1, 1, 2, 1, 1]));
console.log(findUnique([0, 0, 0.55, 0, 0]));
console.log(findUnique([0, 0, 0, 0, 3]));
