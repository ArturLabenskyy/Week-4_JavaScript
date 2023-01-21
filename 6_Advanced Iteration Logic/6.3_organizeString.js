function organizeString(str1, str2) {
    let organize = str1.concat(``, str2);
    organize = organize.split(``);
    organize = organize.sort((a, b) => a.charCodeAt(a) - b.charCodeAt(b));
    let str = [];
    for (let i = 0; i < organize.length; i++) {
        if (i === organize.length - 1 && organize[i] != organize[i - 1]) {
            str.push(organize[i]);
            continue;
        }
        if (organize[i] != organize[i + 1]) {
            str.push(organize[i]);
        }
    }
    return str.join(``);
}

console.log(organizeString(`xyaabbbccccdefww`, `xxxxyyyyabklmopq`));
console.log(
    organizeString(`abcdefghijklmnopqrstuvwxyz`, `abcdefghijklmnopqrstuvwxyz`)
);
