const users = [
  { id: 1, name: 'Tom', age: 25, active: true },
  { id: 2, name: 'Mary', age: 18, active: false },
  { id: 3, name: 'John', age: 30, active: true },
  { id: 4, name: 'Amy', age: 21, active: false },
];

const products = [
  {
    id: 1,
    name: 'Keyboard',
    price: 1200,
    inStock: true,
  },
  {
    id: 2,
    name: 'Mouse',
    price: 800,
    inStock: false,
  },
  {
    id: 3,
    name: 'Monitor',
    price: 5000,
    inStock: true,
  },
  {
    id: 4,
    name: 'USB Cable',
    price: 300,
    inStock: true,
  },
];

const newProduct = {
  id: 5,
  name: 'Laptop',
  price: 30000,
  inStock: true,
};

/* ------------ 留下active === true 並且全部名字改成大寫 連用 filter() 與 map() ------------ */
console.log(users.filter((user) => user.active === true).map((user) => ({ ...user, name: user.name.toUpperCase() })));

/* ----------------------- 留下inStock === true 然後價格打9折 ----------------------- */
console.log(products.filter((product) => product.inStock === true).map((product) => ({ ...product, price: product.price * 0.9 })));

/* -------- 留下inStock === true price >= 1000 並新增一個欄位 discount: "10%" -------- */
console.log(products.filter((product) => product.inStock && product.price >= 1000).map((product) => ({ ...product, discount: '10%' })));

/* --------------------- 把 Monitor 的價格增加 500 元 其他商品保持不變。 -------------------- */
console.log(products.map((product) => (product.name === 'Monitor' ? { ...product, price: product.price + 500 } : product)));

/* --------------------------------- 新增一個商品 --------------------------------- */
console.log([...products, newProduct]);

/* --------------------------------- 刪除一個商品 --------------------------------- */
console.log(products.filter((product) => product.name !== 'Mouse'));

/* ------- 只保留 inStock === true 的商品 價格低於 1000 元 的商品，價格增加 100 元 新增一個欄位 ------- */
console.log(products.filter((product) => product.inStock && product.price < 1000).map((product) => ({ ...product, price: product.price + 100, category: 'Electronics' })));
