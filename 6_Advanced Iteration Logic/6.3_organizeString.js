function organizeString(str1, str2) {
    let organize = str1.concat(``, str2);
    organize = organize.split(``);
    console.log(organize);
}

console.log(organizeString(`xyaabbbccccdefww`, `xxxxyyyyabklmopq`));
