const users = [
  { id: 1, name: 'Tom', age: 25, active: true },
  { id: 2, name: 'Mary', age: 18, active: false },
  { id: 3, name: 'John', age: 30, active: true },
  { id: 4, name: 'Amy', age: 21, active: false },
];

console.log(users[0].name, users[0].age, users[0].active);

/* --------------------------------- 修改某一資料 --------------------------------- */
users[0].age = 26;
console.log(users[0]);

/* --------------------------------- 新增某一屬性 --------------------------------- */
users[0] = { ...users[0], email: 'tom@example.com' };
console.log(users[0]);

/* --------------------------------- 刪除某一屬性 --------------------------------- */
delete users[0].email;
console.log(users[0]);

/* -------------------------------- 全部使用者都+1歲 ------------------------------- */
console.log(users.map((user) => ({ ...user, age: user.age + 1 })));

/* ---------------------------- 把TOM的active改成true --------------------------- */
console.log(users.map((user) => (user.name === 'Tom' ? { ...user, active: false } : user)));
