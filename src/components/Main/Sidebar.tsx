import { useAppSelector } from '@hooks/redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const Sidebar = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  // const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      <h2 className="text-2xl">Sidebar</h2>
      <p>Is logged in: {isLoggedIn ? 'YES' : 'NO'}</p>
    </div>
  );
};
