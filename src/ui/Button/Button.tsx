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
  ({ label, bgColor = 'emerald', color = 'wetAsphalt', ...rest }: Props) => {
    return (
      <button
        style={{ backgroundColor: palette[bgColor], color: palette[color] }}
        {...rest}
      >
        {label}
      </button>
    );
  },
);

Button.displayName = 'memo(Button)';
