const reverseWords = require('./index');

describe('reverseWords', () => {
  test('should reverse the words in a string', () => {
    expect(reverseWords('hello world and hello mars')).toEqual('mars hello and world hello');
  });

  test('should return single word if only one word is given', () => {
    expect(reverseWords('hello')).toEqual('hello');
  });

  test('should handle empty string', () => {
    expect(reverseWords('')).toEqual('');
  });

  // Add more tests as needed
});