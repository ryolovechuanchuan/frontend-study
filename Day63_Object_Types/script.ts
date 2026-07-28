const employee: {
  name: string;
  age: number;
  isWorking: boolean;
} = {
  name: 'Tom',
  age: 30,
  isWorking: true,
};

const product: {
  title: string;
  price: number;
  description?: string;
} = {
  title: 'keyboard',
  price: 2500,
};

const productWithDescription: {
  title: string;
  price: number;
  description?: string;
} = {
  title: 'Mouse',
  price: 1200,
  description: 'wireless mouse',
};

const user: {
  readonly id: number;
  name: string;
  email?: string;
} = {
  id: 1,
  name: 'Tom',
};

const company: {
  name: string;
  address: {
    city: string;
    country: string;
  };
} = {
  name: 'OpenAi',
  address: {
    city: 'San Franciso',
    country: 'USA',
  },
};

const products: {
  title: string;
  price: number;
}[] = [
  {
    title: 'keyboard',
    price: 2500,
  },
  {
    title: 'Mouse',
    price: 1200,
  },
];

console.log(employee);
console.log(product);
console.log(productWithDescription);
console.log(company);
console.log(products);
console.log(products[0].title);
console.log(products[1].price);
