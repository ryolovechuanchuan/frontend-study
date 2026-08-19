interface User {
  id: number;
  name: string;
}

interface UserItemProps {
  user: User;
  onDelete: (id: number) => void;
}
export default function UserItem({ user, onDelete }: UserItemProps) {
  return (
    <div>
      <p>ID:{user.id}</p>
      <p>Name:{user.name}</p>

      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
}
