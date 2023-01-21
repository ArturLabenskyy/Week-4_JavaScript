function isIsogram(str) {
    str = str.toLowerCase();
    let isogram = true;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                isogram = false;
            }
        }
    }
    return isogram;
}

console.log(isIsogram(`Dermatoglyphics`));
console.log(isIsogram(`aba`));
console.log(isIsogram(`moOse`));
console.log(isIsogram(`abcdefgTYZx`));
