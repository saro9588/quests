const findLongestWord = (string) => {
    const words = string.split(" ")
    const longestWord = words.reduce((acc, word) => {
        return word.length > acc.length ? word : acc
    }, "")
    return longestWord
}

module.exports = findLongestWord