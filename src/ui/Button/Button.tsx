import { ComponentProps, memo } from 'react';

const palette = {
  turquoise: '#1abc9c',
  emerald: '#2ecc71',
  peterRiver: '#3498db',
  amethyst: '#9b59b6',
  wetAsphalt: '#34495e',
  greenSea: '#16a085',
  nephritis: '#27ae60',
  belizeHole: '#2980b9',
  wisteria: '#8e44ad',
  midnightBlue: '#2c3e50',
  sunFlower: '#f1c40f',
  carrot: '#e67e22',
  alizarin: '#e74c3c',
  clouds: '#ecf0f1',
  concrete: '#95a5a6',
  orange: '#f39c12',
  pumpkin: '#d35400',
  pomegranate: '#c0392b',
  silver: '#bdc3c7',
  asbestos: '#7f8c8d',
};

type Color = keyof typeof palette;

type Props = ComponentProps<'button'> & {
  label: string;
  bgColor?: Color;
  color?: Color;
};

{
  /* <Button label="One two" />  */
}

export const Button = memo(
  ({ label, bgColor = 'peterRiver', color = 'clouds', ...rest }: Props) => {
    const buttonStyle: React.CSSProperties = {
      backgroundColor: palette[bgColor],
      color: palette[color],
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
    };

    return (
      <button style={buttonStyle} {...rest}>
        {label}
      </button>
    );
  },
);

Button.displayName = 'memo(Button)';
