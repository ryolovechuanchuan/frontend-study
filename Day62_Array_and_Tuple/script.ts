const students: string[] = ['Tom', 'Mary', 'John'];
const salaries: number[] = [35000, 42000, 58000];
const expenseCategories: string[] = ['Food', 'Traansport', 'Shopping', 'Salary'];
const user: [string, number, boolean] = ['Tom', 30, true];
const employee: [string, number, string] = ['Tom', 30000, 'Frontend'];
const loginResult: [boolean, string] = [true, 'Login Success'];
const fruits: string[] = ['Apple', 'Banana', 'Orange'];
const colors: readonly string[] = ['Red', 'Blue', 'Green'];

students.push('David');
salaries.push(65000);
fruits.push('Grape');
user[1] = 31;

console.log(students);
console.log(salaries[0]);
console.log(salaries.length);
console.log(expenseCategories);
console.log(user);
console.log(employee);
console.log(loginResult);
console.log(fruits);
