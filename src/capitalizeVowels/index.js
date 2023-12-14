const capitalizeVowels = (stringInput) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const splitChars = stringInput.split('');
    const capitalizedChars = splitChars.map((char) => {
        if (vowels.includes(char.toLowerCase())) {
            return char.toUpperCase();
        }
        return char;
    });
    return capitalizedChars.join('');
}

module.exports = capitalizeVowels;