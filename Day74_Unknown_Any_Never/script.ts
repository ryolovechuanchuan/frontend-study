function identity<T>(value: T): T {
  return value;
}
identity(100);

function identity2(value: any): any {
  return value;
}

const a = identity2('Tom');

function identity3<T>(value: T): T {
  return value;
}
const b = identity3('Tom');

interface Box<T> {
  item: T;
}

const apple: Box<string> = {
  item: 'Apple',
};

const age: Box<number> = {
  item: 30,
};

function printValue<T>(value: T): T {
  return value;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResult<T> {
  data: T;
  success: boolean;
}

interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`取得資料失敗：${response.status}`);
    }

    const data = (await response.json()) as T;

    return {
      data: data,
      message: 'Success',
      status: response.status,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }

    throw error;
  }
}

async function main() {
  try {
    const response = await fetchData<User[]>('https://jsonplaceholder.typicode.com/users');

    response.data.forEach((user) => {
      console.log(user.name);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log('Main Error:', error.message);
    }
  }
}

main();

const respone: ApiResponse<User[]> = {
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

const result: ApiResult<User[]> = {
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
