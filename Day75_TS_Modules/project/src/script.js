import { add, subtract, multiply } from '../utils/math.js';
import { capitalize } from '../utils/string.js';
import { getUsers } from './/services/api.js';
import { getPost } from './/services/post.js';
console.log(add(10, 20));
console.log(subtract(20, 5));
console.log(multiply(5, 6));
console.log(capitalize('tom'));
const users = getUsers();
users.forEach((user) => {
    console.log(capitalize(user.name));
});
const posts = getPost();
posts.forEach((post) => {
    console.log(post);
});
