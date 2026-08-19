type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  onClick: () => void;
}

export default function Button({ text, variant, onClick }: ButtonProps) {
  return (
    <button className={variant} onClick={onClick}>
      {text}
    </button>
  );
}
