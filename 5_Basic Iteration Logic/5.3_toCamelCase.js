// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
    let arr = str.split(``);
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] === `-` || arr[i] === `_`) {
            arr[i + 1] = arr[i + 1].toUpperCase();
        }
    }
    arr = arr.join(``);
    arr = arr.replaceAll(`-`, ``);
    arr = arr.replaceAll(`_`, ``);
    return arr;
}

console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("the-stealth-warrior"));
