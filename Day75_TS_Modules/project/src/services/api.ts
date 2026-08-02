import { User } from '../models/User.js';

export function getUsers(): User[] {
  const data: User[] = [
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
  ];
  return data;
}
