const math = require('./math');

test('adds 1 to 2 to equal 3', () => {
  expect(math.sum(1, 2)).toBe(3);
});

test('multiply 5 by 2 to equal 10', () => {
  expect(math.multiply(5, 2)).toBe(10);
});

test('devide 50 by 10 to equal 5', () => {
  expect(math.devide(50, 10)).toBe(5);
});