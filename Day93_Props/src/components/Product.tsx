interface ProductProps {
  name: string;
  price: number;
  description?: string;
}

export default function Product({ name, price, description = 'No description' }: ProductProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
      {description && <p>{description}</p>}
    </div>
  );
}
