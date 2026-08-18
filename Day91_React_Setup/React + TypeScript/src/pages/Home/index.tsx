import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [active, setActive] = useState<boolean>(true);

  interface User {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
  }

  const user: User = {
    id: 1,
    name: 'John',
    age: 25,
    isActive: true,
  };

  return (
    <>
      <h1>Day91 React + TS</h1>

      <h2>User Profile</h2>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>Counter:{count}</p>
      <p>Status:{active ? 'Active' : 'Inactive'}</p>

      <div className="countBtn-group">
        <button className="minusBtn" onClick={() => setCount(count - 1)}>
          -1
        </button>
        <button className="resetBtn" onClick={() => setCount(0)}>
          reset
        </button>
        <button className="pushBtn" onClick={() => setCount(count + 1)}>
          +1
        </button>
      </div>
      <button className="activeBtn" onClick={() => setActive(!active)}>
        change active
      </button>
    </>
  );
}
