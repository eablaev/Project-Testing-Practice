const caesarCipher = require('../src/caesarCipher');

require('../src/caesarCipher')

test('caesarCipher', ()=> {
    expect(caesarCipher('abcd', 1)).toBe('bcde')
});
test('caesarCipher wrapping', ()=> {
    expect(caesarCipher('wxyz', 1)).toBe('xyza')
});
test('caesarCipher keeping case', ()=> {
    expect(caesarCipher('WxyZ', 1)).toBe('XyzA')
});
test('caesarCipher punctuation', ()=> {
    expect(caesarCipher('!abcD', 1)).toBe('!bcdE')
});