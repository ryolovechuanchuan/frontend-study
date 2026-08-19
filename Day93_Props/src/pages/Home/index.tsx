import { useState } from 'react';
import UserList from '../../components/UserList';

interface User {
  id: number;
  name: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Mary',
    },
  ]);

  function handleDelete(id: number) {
    const newusers = users.filter((user) => user.id !== id);
    setUsers(newusers);
  }

  function handleDeleteAll() {
    setUsers([]);
  }

  function handleAddUser() {
    const newUser: User = {
      id: Date.now(),
      name: 'Tom',
    };
    setUsers([...users, newUser]);
  }

  return (
    <>
      <h1>Day93 Props</h1>
      <p>目前共有 {users.length} 筆資料</p>
      <button onClick={handleAddUser}>Add User</button>

      {users.length > 0 ? <UserList users={users} onDelete={handleDelete} /> : <p>目前沒有資料</p>}
      <button onClick={() => handleDeleteAll()}>DeleteAll</button>
    </>
  );
}
