const findLongestWord = require('./index');

describe('findLongestWord', () => {
    it('should return first word if all words are the same length', () => {
        expect(findLongestWord("Hello world")).toEqual("Hello")
    })
    it('should return longest word in string', () => {
        expect(findLongestWord("I love JavaScript")).toEqual("JavaScript")
    })
    it('should return empty string if sentence is empty string', () => {
        expect(findLongestWord("Coding     is     fun")).toEqual("Coding")
    })
    it('should return longest word if multiple spaces are between words', () => {
        expect(findLongestWord("")).toEqual("")
    })
})