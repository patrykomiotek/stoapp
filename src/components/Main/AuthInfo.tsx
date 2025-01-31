import { Button } from '@ui';
import { useDispatch } from 'react-redux';
import { toggle } from './authSlice';

export const AuthInfo = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>AuthInfo</h3>
      <p>Hello from AuthInfo</p>
      <Button label="Toggle" onClick={() => dispatch(toggle())} />
    </div>
  );
};
