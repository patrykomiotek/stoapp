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
  return (
    <div>
      <h1>Users</h1>
      {data.map((elem) => {
        return (
          <div>
            <p>
              {elem.id} | {elem.name} | {elem.email}
            </p>
          </div>
        );
      })}
    </div>
  );
};
