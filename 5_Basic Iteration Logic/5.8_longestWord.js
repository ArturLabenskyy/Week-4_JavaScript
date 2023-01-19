// Ex5.8 - shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.
function longestWord(str) {
    let short = str.slice(0, str.indexOf(` `));
    let counter = 0;
    let word = short;
    for (let i = str.indexOf(` `) + 1; i < str.length; i++) {
        if (i === str.length - 1) {
            word = str.substring(i - counter, str.length);
        } else if (str[i] != ` `) {
            counter++;
        } else {
            word = str.substring(i - counter, i);
            counter = 0;
        }
        if (word.length > short.length) {
            short = word;
        }
    }
    return short;
}

console.log(longestWord(`The shortest word issssssss it`));
