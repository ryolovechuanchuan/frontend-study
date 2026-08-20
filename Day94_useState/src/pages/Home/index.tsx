import { useState } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User>({
    id: 1,
    name: 'John',
    age: 25,
  });

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'Mary',
      age: 30,
    },
    {
      id: 2,
      name: 'Jack',
      age: 25,
    },
    {
      id: 3,
      name: 'Willy',
      age: 36,
    },
  ]);
  const [name, setName] = useState('');

  const [isVisible, setIsVisible] = useState<boolean>(true);

  function handleAddUser() {
    const newUser: User = {
      id: Date.now(),
      name: 'Park',
      age: 40,
    };
    setUsers([...users, newUser]);
  }

  function handleDeleteUser(id: number): void {
    const newUsers = users.filter((user) => user.id !== id);

    setUsers(newUsers);
  }

  function handleAgeMinus(id: number): void {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age - 1 };
        }

        return user;
      }),
    );
  }
  function handleAgePlus(id: number): void {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        }
        return user;
      }),
    );
  }

  function handleChangeName(id: number): void {
    if (name.trim() === '') {
      alert('請輸入姓名:');
      return;
    }
    const newUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, name: name };
      } else {
        return user;
      }
    });
    setUsers(newUsers);
  }

  return (
    <>
      <h1>Day94 State</h1>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      {users.map((user) => (
        <div key={user.id}>
          <p>Name:{user.name}</p>
          <p>Age:{user.age}</p>
          <button onClick={() => handleAgeMinus(user.id)}>Age Minus</button>
          <button onClick={() => handleDeleteUser(user.id)}>Delete Users</button>
          <button onClick={() => handleAgePlus(user.id)}>Age Plus</button>
          <button onClick={() => handleChangeName(user.id)}>Change Name</button>
        </div>
      ))}
      <button onClick={handleAddUser}>Add Users</button>

      <p>Hello {name}</p>
      <p>{count}</p>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      {isVisible && <p>Hello React</p>}
      <button onClick={() => setCount((pre) => pre + 1)}>count+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((pre) => pre - 1)}>count-1</button>
      <button onClick={() => setIsVisible((pre) => !pre)}>change isVisible</button>

      <button onClick={() => setUser({ ...user, name: 'Mary' })}>change Name</button>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>Age +1</button>
      <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
    </>
  );
}
