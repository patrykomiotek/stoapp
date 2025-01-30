import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { Button } from '../../ui';

interface State {
  email: string;
  password: string;
}

export const LoginFormState = () => {
  const [formState, setFormState] = useState<State>({
    email: '',
    password: '',
  });

  // const handleEmailChange = (event: ChangeEvent) => {};
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // const name = event.target.name as 'email' | 'password';
    const name = event.target.name;
    const value = event.target.value;

    // formState[name] = value;

    if (Object.keys(formState).includes(name)) {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  return (
    <>
      <div>
        <p>
          E-mail: {formState.email} | Password: {formState.password}
        </p>
      </div>
      <form>
        <input
          type="text"
          onChange={handleChange}
          name="email"
          className="border-2 border-amber-950"
        />

        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="border-2 border-amber-950"
        />
        <div>
          <Button label="Send" />
        </div>
      </form>
    </>
  );
};
