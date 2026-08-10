const price = 100;
const quantity = 3;

console.log(price);
console.log(quantity);

const total = price * quantity;

console.log(total);

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

console.log(calculateTotal(100, 3));
