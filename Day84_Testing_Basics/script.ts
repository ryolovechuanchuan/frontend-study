import { describe, expect, test } from 'vitest';

//Arrange
const price = 100;
const quantity = 3;

//Act
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
const result = calculateTotal(price, quantity);

//Assert
if (result === 300) {
  console.log('Pass');
} else {
  console.log('Fail');
}

test('2 should is true', () => {
  expect(2).toBe(true);
});
