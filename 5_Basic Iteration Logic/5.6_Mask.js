// Ex5.6 - Mask
// Usually when you buy something, you're asked whether your credit card number, phone number
// or answer to your most secret question is still correct. However, since someone could look over
// your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify( "64607935616") == "#######5616"
// maskify( "1") == "1"
// maskify( "") == ""
// // "What was the name of your first pet?"
// maskify("Skippy") == "##ippy"
// maskify("Nananananananananananananananana Batman!") ==
// "####################################man!"

function maskify(str) {
    let arr = [];
    for (let i = 0; i < str.length - 4; i++) {
        if (str[i] === ` `) {
            continue;
        }
        arr.push(`#`);
    }
    for (let i = str.length - 4; i < str.length; i++) {
        arr.push(str[i]);
    }
    arr = arr.join(``);
    console.log(arr.length);
    return arr;
}

console.log(maskify(`Skippy`));
console.log(maskify(`Nananananananananananananananana Batman!`));
console.log(maskify(`                    "1"`));
console.log(maskify(`                    ""`));
