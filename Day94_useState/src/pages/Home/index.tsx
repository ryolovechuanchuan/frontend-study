export default function Home() {
  function handleClick() {
    console.log('Clicked');
  }

  return (
    <>
      <h1>Day95 React Events</h1>

      <button onClick={() => handleClick()}>Click Me</button>
    </>
  );
}
