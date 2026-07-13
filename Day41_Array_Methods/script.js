const users = [
  { id: 1, name: 'Tom', age: 25, active: true },
  { id: 2, name: 'Mary', age: 18, active: false },
  { id: 3, name: 'John', age: 30, active: true },
  { id: 4, name: 'Amy', age: 21, active: false },
];
/* ---------------------------------- 印出名字 ---------------------------------- */
for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}

console.log(users.map((user) => user.name));

/* --------------------------------- 找出true --------------------------------- */
console.log(users.filter((user) => user.active === true));

/* -------------------------------- 找出id===3 -------------------------------- */
console.log(users.find((user) => user.id === 3));

/* ------------------------------ 判斷是否有年齡小於20的人 ------------------------------ */
console.log(users.some((user) => user.age < 20));

/* ------------------------------- 判斷全部是否都滿18歲 ------------------------------ */
console.log(users.every((user) => user.age > 20));

/* ------------------------------ 把所有人的名字都改成大寫 ------------------------------ */
console.log(users.map((user) => user.name.toUpperCase()));

/* -------------------------- 把資料都加入 isAdult: true -------------------------- */
console.log(users.map((user) => ({ ...user, isAdult: user.age >= 18 })));
