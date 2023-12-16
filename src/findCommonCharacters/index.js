// amortized time complexity  O(n)
const findCommonCharacters = (stringOne, stringTwo) => {
    const charSetOne = new Set(stringOne.toLowerCase());
    const charSetTwo = new Set(stringTwo.toLowerCase());
    let commonCharacters = "";
    charSetOne.forEach(char => {
        if (charSetTwo.has(char)) {
            commonCharacters += char;
        }
    });
    return commonCharacters;
}

module.exports = findCommonCharacters;