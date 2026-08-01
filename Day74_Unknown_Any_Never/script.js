"use strict";
function identity(value) {
    return value;
}
identity(100);
function identity2(value) {
    return value;
}
const a = identity2('Tom');
function identity3(value) {
    return value;
}
const b = identity3('Tom');
const apple = {
    item: 'Apple',
};
const age = {
    item: 30,
};
function printValue(value) {
    return value;
}
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`取得資料失敗：${response.status}`);
        }
        const data = (await response.json());
        return {
            data: data,
            message: 'Success',
            status: response.status,
        };
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        throw error;
    }
}
async function main() {
    try {
        const response = await fetchData('https://jsonplaceholder.typicode.com/users');
        response.data.forEach((user) => {
            console.log(user.name);
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log('Main Error:', error.message);
        }
    }
}
main();
const respone = {
    data: [
        {
            id: 1,
            name: 'Tom',
            email: 'Tom@test.com',
        },
        {
            id: 2,
            name: 'Amy',
            email: 'Amy@test.com',
        },
        {
            id: 3,
            name: 'John',
            email: 'John@test.com',
        },
    ],
    message: 'Success',
    status: 200,
};
respone.data.forEach((user) => {
    console.log(user.email);
});
const result = {
    data: [
        {
            id: 1,
            name: 'Tom',
            email: 'tom@test.com',
        },
        {
            id: 2,
            name: 'Amy',
            email: 'amy@test.com',
        },
        {
            id: 3,
            name: 'John',
            email: 'john@test.com',
        },
    ],
    success: true,
};
result.data.forEach((user) => {
    console.log(user.name);
});
