interface ActionButtonProps {
  text: string;
  onClick: () => void;
}

export default function ActionButton({ text, onClick }: ActionButtonProps) {
  return (
    <>
      <button onClick={onClick}> {text} </button>
    </>
  );
}
