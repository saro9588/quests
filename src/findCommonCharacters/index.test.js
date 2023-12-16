const findCommonCharacters = require('./index');

describe('findCommonCharacters', () => {
    it('should return empty string if no common characters', () => {
        expect(findCommonCharacters("JavaScript", "We")).toEqual("")
    })
    it('should return string containing common characters', () => {
        expect(findCommonCharacters("hello", "world")).toEqual("lo")
    })
    it('should return string containing common characters ignoring case', () => {
        expect(findCommonCharacters("JavaScript", "HTML")).toEqual("t")
    })
})