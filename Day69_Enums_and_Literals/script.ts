enum OrderStatus {
  Pending, //0
  Processing, //1
  Completed, //2
}
let Target1: OrderStatus = OrderStatus.Pending;
console.log(Target1);

enum Direction {
  Up, //0
  Down, //1
  Left, //2
  Right, //3
}
console.log(Direction.Up);
console.log(Direction.Right);

enum UserRole {
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest',
}

const role: UserRole = UserRole.Admin;
console.log(role);

enum Theme {
  Light = 'Light',
  Dark = 'Dark',
}

console.log(Theme.Dark);
console.log(Theme.Light);

let direction: 'left'; //只能是left
direction = 'left';
console.log(direction);

let size: 'small' | 'medium' | 'large';

size = 'medium';
console.log(size);

function setLanguage(language: 'zh-TW' | 'en-US' | 'ja-JP'): void {
  console.log(language);
}

setLanguage('zh-TW');
setLanguage('ja-JP');

type ShowRole = 'Admin' | 'User' | 'Guest';

let userrole: ShowRole = 'Admin';
console.log(userrole);
