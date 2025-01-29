const palette = {
  turquoise: '#1abc9c',
  emerald: '#2ecc71',
  peterRiver: '#3498db',
  amethyst: '#9b59b6',
  wetAsphalt: '#34495e',
  greenSea: '#16a085',
  nephritis: '#27ae60',
  belizeHole: '#2980b9',
};

type Color = keyof typeof palette;

interface Props {
  label: string;
  bgColor?: Color;
  color?: Color;
  onClick?: () => void;
}

{
  /* <Button label="One two" />  */
}

export const Button = ({
  onClick,
  label,
  bgColor = 'emerald',
  color = 'wetAsphalt',
}: Props) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: palette[bgColor], color: palette[color] }}
    >
      {label}
    </button>
  );
};
