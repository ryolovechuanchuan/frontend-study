console.log('開始');

setTimeout(() => {
  console.log('下載完成');
}, 3000);

console.log('結束');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'TOM',
      age: 25,
    });
  }, 2000);
});

promise
  .then((user) => {
    console.log(user.name);
    console.log(user.age);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.resolve(5)
  .then((num) => {
    return num * 2;
  })
  .then((num) => {
    return {
      number: num,
      square: num * num,
    };
  })
  .then((result) => {
    console.log(result);
  });

function hello() {
  console.log('Hello');
}

console.log(hello);

() => {
  console.log('我是 callback');
};

console.log('AAA');

function run(fn) {
  console.log('開始');

  fn();

  console.log('結束');
}
run(() => {
  console.log('我是 callback');
});
