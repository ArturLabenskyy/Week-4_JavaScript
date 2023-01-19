function accum(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            if (j === 0) {
                arr.push(str[i].toUpperCase());
            } else {
                arr.push(str[i].toLowerCase());
            }
        }
        if (i != str.length - 1) {
            arr.push(`-`);
        }
    }
    arr = arr.join(``);
    return arr;
}

console.log(accum(`abcd`));
