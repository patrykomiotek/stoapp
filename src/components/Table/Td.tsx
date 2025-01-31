import { ComponentProps, memo } from 'react';

type Props = ComponentProps<'td'> & {
  children: string | number | boolean;
};

export const Td = memo(({ children, ...rest }: Props) => {
  const value =
    typeof children === 'string' || typeof children === 'boolean'
      ? parseInt(children, 0)
      : children;
  const className = value % 2 === 0 ? 'bg-blue-300' : 'bg-red-300';

  return (
    <td style={{ padding: 4 }} className={className} {...rest}>
      {children}
    </td>
  );
});

Td.displayName = 'memo(Td)';
