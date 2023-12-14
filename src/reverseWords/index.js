// using built-in methods
function reverseWords(words) {
    return words.split(" ").reverse().join(" ")
}

// no built-in methods: .length, .split, .reverse, .join
function reverseWordsRaw(words) {
    let index = 0
    let currentCharacter = words[index]
    let currentWord = ""
    let wordList = []
    let wordCount = 0
    let outputString = ""

    // loop over each character to build a word list based on " " (space char)
    while (currentCharacter) {
        if (currentCharacter === " ") {
            wordList[wordCount] = currentWord
            currentWord = ""
            wordCount++
        } else {
        currentWord += currentCharacter
        }
        index++
        currentCharacter = words[index]
        // check for last iteration and push word
        if (!currentCharacter && currentWord) {
        wordList[wordCount] = currentWord
        wordCount++
        }
    }

    // clear current word and reset index count
    index = wordCount - 1
    // work backwords over our word list to build our output string
    while (index >= 0) {
        outputString += wordList[index]

        // determine if space is needed
        if (index - 1 >= 0) {
        outputString += " "
        }

        index--
    }


    return outputString
}

module.exports = reverseWords
