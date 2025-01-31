import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Stepper } from './Stepper';

describe('Stepper component', () => {
  it('should change values', () => {
    const { debug } = render(<Stepper />);

    expect(screen.getByText('0')).toBeInTheDocument();

    // const incButton = screen.getByText('+')
    const incButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(incButton);
    fireEvent.click(incButton);

    expect(screen.getByText('2')).toBeInTheDocument();

    const decButton = screen.getByRole('button', { name: '-' });
    fireEvent.click(decButton);
    expect(screen.getByText('1')).toBeInTheDocument();

    // const inputField = screen.getByRole('textbox');
    let inputField = screen.getByTestId('my-custom-input');
    fireEvent.change(inputField, { target: { value: '567' } });
    fireEvent.keyDown(inputField, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });

    expect(screen.getByText('567')).toBeInTheDocument();

    inputField = screen.getByTestId('my-custom-input');
    expect(screen.getByDisplayValue('567')).toBeInTheDocument();
  });

  it('should change values with userEvent', async () => {
    const { debug } = render(<Stepper />);

    expect(screen.getByText('0')).toBeInTheDocument();

    // const incButton = screen.getByText('+')
    const incButton = screen.getByRole('button', { name: '+' });
    await userEvent.click(incButton);
    await userEvent.click(incButton);

    expect(screen.getByText('2')).toBeInTheDocument();

    const decButton = screen.getByRole('button', { name: '-' });
    await userEvent.click(decButton);
    expect(screen.getByText('1')).toBeInTheDocument();

    // const inputField = screen.getByRole('textbox');
    let inputField = screen.getByTestId('my-custom-input');
    await userEvent.type(inputField, '567');
    // userEvent.keyboard('{{Enter}}');
    fireEvent.keyDown(inputField, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });

    expect(screen.getByText('567')).toBeInTheDocument();

    expect(screen.getByText('567')).toBeInTheDocument();

    inputField = screen.getByTestId('my-custom-input');
    expect(screen.getByDisplayValue('567')).toBeInTheDocument();
  });
});
