const analyzeArray = require('../src/analyzeArray')

test('analyzeArray returns object', () => {
    expect(analyzeArray([1,2,3])).toBeInstanceOf(Object);
});

test('analyzeArray average', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4)
});

test('analyzeArray min', () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1)
});

test('analyzeArray max', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8)
});

test('analyzeArray length', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6)
});