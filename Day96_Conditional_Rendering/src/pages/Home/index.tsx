import { useState } from 'react';

export default function Home() {
  interface User {
    id: number;
    name: string;
    isOnline: boolean;
  }

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(true);
  const [cartCount, setCartCount] = useState<number>(3);

  const users: User[] = [
    {
      id: 1,
      name: 'Mary',
      isOnline: true,
    },
    {
      id: 2,
      name: 'Jack',
      isOnline: false,
    },
    {
      id: 3,
      name: 'Willy',
      isOnline: true,
    },
  ];

  function handleisLoggedIn() {
    setIsLoggedIn(!isLoggedIn);
  }

  function handleisAdmin() {
    setIsAdmin(!isAdmin);
  }

  function handleisLoading() {
    setIsLoading(!isLoading);
    console.log('isLoading:' + isLoading);
    console.log('hasError:' + hasError);
  }

  function handlehasError() {
    setHasError(!hasError);
    console.log('isLoading:' + isLoading);
    console.log('hasError:' + hasError);
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : hasError ? (
        <p>somthing went wrong</p>
      ) : (
        <div>
          <div>
            <button onClick={handleisLoggedIn}>{isLoggedIn ? 'Logout' : 'Login'}</button>
            <button onClick={handleisAdmin}>{isAdmin ? 'Admin mode' : 'Normal User'}</button>
          </div>
          <p>Status:{isLoggedIn ? 'Welcom' : 'Please Login'}</p>
          {isLoggedIn && isAdmin && <p>Admin Panel</p>}
          {cartCount !== 0 && <p>Cart:3</p>}
          <p>User</p>
          <p>-----------</p>
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.isOnline ? 'Online' : 'Offline'}</p>
              </div>
            ))
          ) : (
            <p>NO Users</p>
          )}
        </div>
      )}

      <button onClick={handleisLoading}>change Loading</button>
      <button onClick={handlehasError}>change hasError</button>
    </>
  );
}
