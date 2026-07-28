type Employee = {
  name: string;
  age: number;
};

type Product = {
  title: string;
  price: number;
  isStock: boolean;
};

const keyboard: Product = {
  title: 'Keyboard',
  price: 2500,
  isStock: true,
};

const employees: Employee[] = [
  {
    name: 'Tom',
    age: 30,
  },
];

type Contact = {
  email: string;
};

employees.push({
  name: 'Tom',
  age: 30,
});

let employeeId: number | string;
employeeId = 1001;

let loginStatus: boolean | string;
loginStatus = true;
loginStatus = 'Success';

type Salary = {
  salary: number;
};

type EmployeeInfo = Employee & Salary & Contact;

const employee1: EmployeeInfo = {
  name: 'Tom',
  age: 30,
  salary: 45000,
  email: 'tom@TextDecoderStream.com',
};

console.log(employees);
console.log(keyboard);
console.log(employees);
console.log(employeeId);

employeeId = 'EMP001';
console.log(employeeId);

console.log(loginStatus);
console.log(employee1);
