import { ComponentProps, memo } from 'react';

type Props = ComponentProps<'td'> & {
  children: string | number | boolean;
};

export const Td = memo(({ children, ...rest }: Props) => {
  return (
    <td style={{ padding: 4 }} {...rest}>
      {children}
    </td>
  );
});

Td.displayName = 'memo(Td)';
