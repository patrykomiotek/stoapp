import { FormEvent, useRef } from 'react';
import { Button, Input } from '../../ui';

export const LoginFormRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(emailFieldRef.current?.value, passwordFieldRef.current?.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          ref={emailFieldRef}
          label="E-mail"
          type="text"
          name="email"
          className="border-2 border-amber-950"
        />

        <Input
          ref={passwordFieldRef}
          label="Password"
          type="password"
          name="password"
          className="border-2 border-amber-950"
        />
        <div>
          <Button label="Send" />
        </div>
      </form>
    </>
  );
};
