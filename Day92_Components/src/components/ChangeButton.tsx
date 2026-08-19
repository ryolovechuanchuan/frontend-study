interface ChangeButtonProps {
  text: string;
  amount: number;
  onChange: (amount: number) => void;
}

export default function ChangeButton({ text, amount, onChange }: ChangeButtonProps) {
  return (
    <>
      <button onClick={() => onChange(amount)}>{text}</button>
    </>
  );
}
