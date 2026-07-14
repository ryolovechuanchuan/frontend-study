async function postData() {
  const user = {
    name: 'Tom',
    age: 25,
  };
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos',

      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Learn Fetch API',
          completed: false,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`新增失敗:${response.status}`);
    }

    const data = await response.json();
    console.log(data.title);
  } catch (error) {
    console.log(error.message);
  }
}
postData();
