const calculator = require('../src/calculator');

test('calculator adds', () => {
    expect(calculator.add(2, 5)).toBe(7);
});

test('calculator subtracts', () => {
    expect(calculator.subtract(4, 5)).toBe(-1);
});

test('calculator divides', () => {
    expect(calculator.divide(3, 2)).toBe(1.5);
});

test('calculator multiplies', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
});