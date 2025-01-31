import { Button } from '@ui';
import { io } from 'socket.io-client';
import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Td } from './Td';

// [3, 2]

const initialData = [
  {
    id: 3,
    name: 'Jan K.',
    email: 'jan@wp.pl',
  },
  {
    id: 7,
    name: 'Julia M.',
    email: 'julia@gmail.com',
  },
  {
    id: 56,
    name: 'Marin W.',
    email: 'w@onet.pl',
  },
];

const socket = io('http://localhost:3333', { transports: ['websocket'] });

export const Table = () => {
  // const { isConnected, checkIsConnected } = useTableLogic();

  // const userRefs = useRef<string[]>([]); // current=[]
  const userRefs = useRef(new Set<string>()); // current=[]
  const usersIds: string[] = [];
  const [ids, setIds] = useState<string[]>([]);
  const [painted, setPainter] = useState(true);
  const [data, setData] = useState(initialData);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [exchangeData, setExchangeData] = useState([]);

  // const ids = state[0];
  // const setIds = state[1];
  // state[1](124)

  useEffect(() => {
    // data
    // 1. update state
    // 2. ref dla kazdej komórki (createRef), iteracja po danych
    // 3. observable (rx.js)
  }, []);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onExchangeEvent(value) {
      console.log({ value });
      // setExchangeData((previous) => [...previous, value]);
      setExchangeData(value);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('exchange-data', onExchangeEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('exchange-data', onExchangeEvent);
    };
  }, []);

  const handleClick = () => {
    // alert(JSON.stringify(ids));
    // alert(JSON.stringify(usersIds));
    // alert(JSON.stringify(userRefs.current.values()));
    console.log(userRefs.current.values());
  };

  const handleCheck: ChangeEventHandler<HTMLInputElement> = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      // setIds([...ids, event.target.id]);
      // ids.push(event.target.id); // Działa, ale NIE :)
      // usersIds.push(event.target.id);
      // userRefs.current.push(event.target.id);
      userRefs.current.add(event.target.id);
    } else {
      userRefs.current.delete(event.target.id);
    }
  };

  function getRandomArbitrary(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
  const handleRerender = useCallback(() => {
    // const newData = [...data];
    // const randomId = getRandomArbitrary(0, 2);
    // data[randomId].name = data[randomId].name;

    // const clonedData = structuredClone([...data]);
    const clonedData = structuredClone(data);
    const newData = clonedData.map((elem) => {
      const randomId1 = getRandomArbitrary(0, 2);
      const randomId2 = getRandomArbitrary(0, 2);
      // console.log('randomId: ', randomId1);
      // elem.name = data[randomId1].name;
      return {
        ...elem,
        // name: data[randomId1].name,
        name: `${randomId1}`,
        email: `${randomId2}`,
      };
      // return elem;
    });
    console.log(newData);
    setData(newData);

    // const clonedData = structuredClone(data);
    // clonedData.s

    console.log('Rerender');
    setPainter((value) => !value);
  }, []);

  // createRef()

  const columns = 40;

  const generateHeaders = () => {
    const headers = [];
    for (let i = 0; i < columns; i++) {
      headers.push(<th>Symbol{i + 1}</th>);
    }
    return headers;
  };

  const generateCells = (elem) => {
    const cells = [];
    for (let i = 0; i < columns; i++) {
      cells.push(<Td>{elem[`symbol${i + 1}`]}</Td>);
    }
    return cells;
  };

  return (
    <div className="mt-8">
      <h1>Users</h1>
      <Button label="Show ids" onClick={handleClick} />
      <Button label="Rerender" onClick={handleRerender} />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            {generateHeaders()}
          </tr>
        </thead>
        <tbody>
          {exchangeData.map((elem) => {
            return (
              <tr key={elem.id}>
                <td style={{ padding: 4 }}>
                  <input
                    // ref={refs[0][2]}
                    type="checkbox"
                    id={`${elem.id}`}
                    onChange={handleCheck}
                  />
                </td>
                <Td>{elem.id}</Td>

                {generateCells(elem)}

                <Td>{elem.symbol1}</Td>
                <Td>{elem.symbol2}</Td>
                <Td>{elem.symbol3}</Td>
                <Td>{elem.symbol4}</Td>
                <Td>{elem.symbol5}</Td>
                {/* <Td>{elem.email}</Td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
