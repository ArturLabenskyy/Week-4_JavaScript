function filter(arr, callback) {
    let filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filterArr.push(arr[i]);
        }
    }
    return filterArr;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = filter(numbers, function (num) {
    return num % 2 === 0;
});
console.log(evenNumbers);
