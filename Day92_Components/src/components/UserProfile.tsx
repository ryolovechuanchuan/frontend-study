import { useState } from 'react';

interface UserProfileProps {
  name: string;
  age: number;
  isActive: boolean;
}

export default function UserProfile({ name, age, isActive }: UserProfileProps) {
  const [isActiveStatus, setIsActiveStatus] = useState<boolean>(isActive);

  return (
    <section>
      <h2>User Profile</h2>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Status:{isActiveStatus ? 'Active' : 'Inactive'}</p>
      <button className="isActiveBtn" onClick={() => setIsActiveStatus(!isActiveStatus)}>
        change active
      </button>
    </section>
  );
}
