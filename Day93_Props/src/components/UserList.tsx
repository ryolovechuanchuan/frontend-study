import UserItem from './UserItem';

interface User {
  id: number;
  name: string;
}

interface UserListProps {
  users: User[];
  onDelete: (id: number) => void;
}

export default function UserList({ users, onDelete }: UserListProps) {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
}
