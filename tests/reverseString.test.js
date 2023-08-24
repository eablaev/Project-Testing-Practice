const reverseString = require('../src/reverseString');

test('reverseString', () => {
    expect(reverseString('hello')).toBe('olleh');
});