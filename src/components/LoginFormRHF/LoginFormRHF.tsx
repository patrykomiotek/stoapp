import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Input } from '../../ui';
import { zodResolver } from '@hookform/resolvers/zod';

interface State {
  email: string;
  password: string;
}

const validationSchema = z.object({
  email: z.string().email('Nieprawidłowy email ✉️'),
  password: z.string().min(3, 'Hasło za krótkie 🚨'),
});

export const LoginFormRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<State>({
    resolver: zodResolver(validationSchema),
  });

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
          error={errors.email}
          className="border-2"
        />

        <Input
          {...register('password')}
          label="Password"
          type="password"
          error={errors.password}
          className="border-2 "
        />
        <div>
          <Button label="Send" />
        </div>
      </form>
    </>
  );
};
