interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Typicode {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

async function getApiData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    console.log(response.status);

    if (!response.ok) {
      throw new Error('找不到使用者');
    }
    const users = (await response.json()) as User[]; //加入介面限制每一個user的資料型態

    users.forEach((item) => {
      console.log(item.name);
      console.log(item.username);
      console.log(item.email);
    });
  } catch (error) {
    if (error instanceof Error) console.log(error.message); //if(error instanceof Error)  確認error的內容是Error的物件資料
  }
}

// getApiData();

async function getPostApi() {
  try {
    const respone = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!respone.ok) {
      throw new Error('資料有誤');
    }

    const postsdata = (await respone.json()) as Post[];
    postsdata.forEach((item) => {
      console.log(item.title);
      console.log(item.body);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
// getPostApi();

async function getTodoApi() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    if (!response.ok) {
      throw new Error('找不到使用者');
    }

    const todosdata = (await response.json()) as Todo[];
    todosdata.forEach((item) => {
      if (item.completed) {
        console.log(item.title + ' ✔ ');
      } else {
        console.log(item.title + ' ✘ ');
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
// getTodoApi();

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo; //巢狀結構
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address; //巢狀結構
  company: Company; //巢狀結構
}

async function getTypicodeApi() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('取得使用者資料失敗');
    }

    const users = (await response.json()) as User[];

    users.forEach((user) => {
      console.log('====================');
      console.log(`姓名：${user.name}`);
      console.log(`帳號：${user.username}`);
      console.log(`Email：${user.email}`);
      console.log(`電話：${user.phone}`);
      console.log(`網站：${user.website}`);

      console.log('--- Address ---');
      console.log(`Street：${user.address.street}`);
      console.log(`Suite：${user.address.suite}`);
      console.log(`City：${user.address.city}`);
      console.log(`ZipCode：${user.address.zipcode}`);

      console.log('--- Geo ---');
      console.log(`Lat：${user.address.geo.lat}`);
      console.log(`Lng：${user.address.geo.lng}`);

      console.log('--- Company ---');
      console.log(`公司：${user.company.name}`);
      console.log(`標語：${user.company.catchPhrase}`);
      console.log(`Business：${user.company.bs}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log('API Error:', error.message);
    }
  }
}

getTypicodeApi();
