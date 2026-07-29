"use strict";
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Processing"] = 1] = "Processing";
    OrderStatus[OrderStatus["Completed"] = 2] = "Completed";
})(OrderStatus || (OrderStatus = {}));
let Target1 = OrderStatus.Pending;
console.log(Target1);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Right);
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["User"] = "User";
    UserRole["Guest"] = "Guest";
})(UserRole || (UserRole = {}));
const role = UserRole.Admin;
console.log(role);
var Theme;
(function (Theme) {
    Theme["Light"] = "Light";
    Theme["Dark"] = "Dark";
})(Theme || (Theme = {}));
console.log(Theme.Dark);
console.log(Theme.Light);
let direction; //只能是left
direction = 'left';
console.log(direction);
let size;
size = 'medium';
console.log(size);
function setLanguage(language) {
    console.log(language);
}
setLanguage('zh-TW');
setLanguage('ja-JP');
let userrole = 'Admin';
console.log(userrole);
