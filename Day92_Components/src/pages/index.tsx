import UserProfile from '../../components/UserProfile';
import Counter from '../../components/counter';
import Header from '../../components/Header';
import Card from '../../components/Card';

export default function Home() {
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
      <Card title="User Profile">
        <p>{user.name}</p>
        <p>{user.age}</p>
      </Card>

      <Card title="Counter">
        <Header />

        <Counter />
        <UserProfile name={user.name} age={user.age} isActive={user.isActive} />
      </Card>
    </>
  );
}
