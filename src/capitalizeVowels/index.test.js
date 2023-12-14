const capitalizeVowels = require('./index');

describe('capitalizeVowels', () => {
    it('should capitalize all vowels in a string', () => {
        expect(capitalizeVowels('hello world')).toEqual('hEllO wOrld');
        expect(capitalizeVowels('hEllo wOrld')).toEqual('hEllO wOrld');
        expect(capitalizeVowels('HELLO WORLD')).toEqual('HELLO WORLD');
    })
    it('should respect spaces in a string with spaces', () => {
        expect(capitalizeVowels('hello world')).toEqual('hEllO wOrld');
        expect(capitalizeVowels('hEllo wOrld')).toEqual('hEllO wOrld');
        expect(capitalizeVowels('HELLO WORLD')).toEqual('HELLO WORLD');
    })
    it('should return empty string if empty string is provided', () => {
        expect(capitalizeVowels('')).toEqual('');
    })
})