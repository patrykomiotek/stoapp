interface Props {
  label?: string;
  bgColor?: string;
  color: string;
  onClick?: () => void;
}

{
  /* <Button label="One two" />  */
}

// turquoise: '#1abc9c',
// emerald: '#2ecc71',
// peterRiver: '#3498db',
// amethyst: '#9b59b6',
// wetAsphalt: '#34495e',
// greenSea: '#16a085',
// nephritis: '#27ae60',
// belizeHole: '#2980b9',

export const Button = ({ onClick, label, bgColor = 'black', color = 'white' }: Props) => {
  return (
    <button onClick={onClick} className="btn" style={{ backgroundColor: bgColor, color: color }}>
      {label}
    </button>
  );
};
