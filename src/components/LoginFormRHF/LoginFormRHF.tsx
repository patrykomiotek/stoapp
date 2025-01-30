import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Input } from '../../ui';

interface State {
  email: string;
  password: string;
}

export const LoginFormRHF = () => {
  const { register, handleSubmit } = useForm<State>();

  const handleLoginForm: SubmitHandler<State> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLoginForm)}>
        <Input
          {...register('email')}
          label="E-mail"
          type="text"
          className="border-2 border-amber-950"
        />

        <Input
          {...register('password')}
          label="Password"
          type="password"
          className="border-2 border-amber-950"
        />
        <div>
          <Button label="Send" />
        </div>
      </form>
    </>
  );
};
