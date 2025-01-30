import { Button } from '@ui';
import { ChangeEventHandler, useState } from 'react';

const data = [
  {
    id: 3,
    name: 'Jan Kowalski',
    email: 'jan@wp.pl',
  },
  {
    id: 7,
    name: 'Julia Maliniak',
    email: 'julia@gmail.com',
  },
  {
    id: 56,
    name: 'Marin W.',
    email: 'w@onet.pl',
  },
];

export const Table = () => {
  const [ids, setIds] = useState<string[]>([]);
  // const ids = state[0];
  // const setIds = state[1];
  // state[1](124)

  const handleClick = () => {
    alert(JSON.stringify(ids));
  };

  const handleCheck: ChangeEventHandler<HTMLInputElement> = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setIds([...ids, event.target.id]);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <Button label="Show ids" onClick={handleClick} />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => {
            return (
              <tr key={elem.id}>
                <td style={{ padding: 4 }}>
                  <input
                    type="checkbox"
                    id={`${elem.id}`}
                    onChange={handleCheck}
                  />
                </td>
                <td style={{ padding: 4 }}>{elem.id}</td>
                <td style={{ padding: 4 }}>{elem.name}</td>

                <td style={{ padding: 4 }}>{elem.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
