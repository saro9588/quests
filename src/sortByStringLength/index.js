// sortByStringLength(['apple', 'banana', 'pear', 'kiwi'])
// first iteration
// is apple.length greater than banana.length? no, so don't swap => ['apple', 'banana', 'pear', 'kiwi']
// is banana.length greater than pear.length? yes, so swap => ['apple', 'pear', 'banana', 'kiwi']
// is banana.length greater than kiwi.length? yes, so swap => ['apple', 'pear', 'kiwi', 'banana']
// second iteration
// is apple.length greater than pear.length? yes, so swap => ['pear', 'apple', 'kiwi', 'banana']
// is apple.length greater than kiwi.length? yes, so swap => ['pear', 'kiwi', 'apple', 'banana']
// is apple.length greater than banana.length? no, so don't swap => ['pear', 'kiwi', 'apple', 'banana']
// third iteration
// is pear.length greater than kiwi.length? no, so don't swap => ['pear', 'kiwi', 'apple', 'banana']
// is kiwi.length greater than apple.length? no, so don't swap => ['pear', 'kiwi', 'apple', 'banana']
// is apple.length greater than banana.length? no, so don't swap => ['pear', 'kiwi', 'apple', 'banana']
// complete => ['pear', 'kiwi', 'apple', 'banana']

const _sortByStringLength = (listOfWords) => {
    const lastIndex = listOfWords.length - 1
    for(let i = 0; i <= lastIndex; i++) {
        // restrict i from going out of bounds, we never compare last element with the element after it (null!)
        for(let j = 0; j <= lastIndex - 1; j++) {
            // console.log(`is ${listOfWords[j]}.length greater than ${listOfWords[j + 1]}.length?, ${listOfWords[j].length > listOfWords[j + 1].length ? "yes, so swap" : "no, so don't swap"}`)
            if (listOfWords[j].length > listOfWords[j + 1].length) {
                let targetIntegerPlaceHolder = listOfWords[j + 1]
                listOfWords[j + 1] = listOfWords[j]
                listOfWords[j] = targetIntegerPlaceHolder
            }
            // console.log(listOfWords)
        }
    }
    return listOfWords
}

const sortByStringLength = (listOfWords) => {
    let notSorted = true
    while(notSorted) {
        // assume the list is sorted
        notSorted = false
        // restrict i from going out of bounds, we never compare last element with the element after it (null!)
        for(let i = 0; i < listOfWords.length - 1; i++){
            if (listOfWords[i].length > listOfWords[i + 1].length) {
                const temp = listOfWords[i]
                listOfWords[i] = listOfWords[i + 1]
                listOfWords[i + 1] = temp
                notSorted = true
            }
        }
    }
    return listOfWords
}

module.exports = sortByStringLength