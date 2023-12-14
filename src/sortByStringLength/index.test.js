const sortByStringLength = require('./index');

describe('sortByStringLength', () => {
    it('should return correct order when some elements have the same length', () => {
        expect(sortByStringLength(['apple', 'banana', 'pear', 'kiwi'])).toEqual([ 'pear', 'kiwi', 'apple', 'banana' ])
    })

    it('should return an empty array when input is empty', () => {
        expect(sortByStringLength([])).toEqual([]);
    })

    it('should return the same array when it contains only one element', () => {
        expect(sortByStringLength(['single'])).toEqual(['single']);
    })
    
    it('should return the same array when all elements have the same length', () => {
        expect(sortByStringLength(['one', 'two', 'red', 'ton'])).toEqual(['one', 'two', 'red', 'ton']);
    })

})