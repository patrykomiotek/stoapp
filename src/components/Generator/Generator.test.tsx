import { render, screen, fireEvent } from '@testing-library/react';
import { Generator } from './Generator';

// ✔️ 1. uuid is rendered on the screen
// ✔️ 2. click the button
// ✔️ 3. uuid value should be different

describe('Generator component', () => {
  it('should regenerate uuid values', () => {
    const { debug } = render(<Generator />);
    debug();

    const uuid = screen.getByText(/[a-zA-Z0-9-]{32}/).textContent;

    fireEvent.click(screen.getByRole('button'));

    const newUuid = screen.getByText(/[a-zA-Z0-9-]{32}/).textContent;

    expect(uuid).not.toBe(newUuid);
  });
});
