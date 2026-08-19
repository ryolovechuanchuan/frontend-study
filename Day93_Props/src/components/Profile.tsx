interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}

interface ProfileProps {
  user: User;
}
export default function Profile({ user }: ProfileProps) {
  return (
    <section>
      <h2>User Profile</h2>

      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
      <p>Status:{user.isActive ? 'Active' : 'Inactive'}</p>
    </section>
  );
}
