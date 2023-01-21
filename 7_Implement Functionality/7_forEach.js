function forEachFunction(arr, callback) {
    let forEachArr = [];
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
