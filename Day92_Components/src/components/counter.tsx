import { useState } from 'react';
import ActionButton from './ActionButton';
import ChangeButton from './ChangeButton.tsx';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function changeCount(amount: number): void {
    setCount(count + amount);
  }

  return (
    <>
      <p>Counter:{count}</p>
      <div className="countBtn-group">
        <ChangeButton text="-5" amount={-5} onChange={changeCount} />

        <ActionButton text="-1" onClick={() => setCount(count - 1)} />

        <ActionButton text="reset" onClick={() => setCount(0)} />

        <ActionButton text="+1" onClick={() => setCount(count + 1)} />

        <ChangeButton text="5" amount={5} onChange={changeCount} />
      </div>
    </>
  );
}
