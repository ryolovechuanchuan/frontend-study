interface Product {
  id: number;
  title: string;
  price: number;
}

const productInfo: Pick<Product, 'title' | 'price'> = {
  title: 'keyboard',
  price: 1200,
};

console.log(productInfo);

const updateProduct: Partial<Product> = {
  //Partial 不需要把所有欄位都傳入
  price: 999,
};

console.log(updateProduct);

interface Employee {
  id?: number;
  name?: string;
}

const empolyee1 = {}; //可以都不填

const empolyee2: Required<Employee> = {
  //Reqired一定都要填寫
  id: 1,
  name: 'Tom',
};

interface Book {
  title?: string;
  author?: string;
}

const myBook: Required<Book> = {
  title: 'TypeScript Guide',
  author: 'Jogn',
};

console.log(myBook);

interface Settings {
  language: string;
  theme: string;
}

const applSettings: Readonly<Settings> = {
  language: 'zh-TW',
  theme: 'dark',
};

console.log(applSettings);

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const profile: Pick<User, 'name' | 'email'> = {
  //Pick挑出要的部分
  name: 'Tom',
  email: 'tom@test.com',
};

console.log(profile);

const newUser: Omit<User, 'id'> = {
  //Omit  挑出不要的剩下全都要
  name: 'Mary',
  email: 'Mary@test.com',
  age: 30,
};

console.log(newUser);

const countries: Record<string, string> = {
  TW: 'Taiwan',
  JP: 'Japan',
  Us: 'United States',
};

console.log(countries);

// Partial<T>	全部欄位改成可選	更新資料（Update API）
// Required<T>	全部欄位改成必填	建立資料、表單驗證
// Readonly<T>	欄位不可修改	設定檔、唯讀資料
// Pick<T, K>	挑選部分欄位	個人資料、列表顯示
// Omit<T, K>	排除部分欄位	新增資料（不包含 ID）
// Record<K, V>	建立鍵值對物件	字典、快取、ID 對應資料
