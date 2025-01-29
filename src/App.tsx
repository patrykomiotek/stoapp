// import { useState } from 'react';
import './App.css';

// import Kaczka from './ui/Text/Text';
// import { Text } from './ui/Text/Text';
// import { Text } from './ui/Text';
import { Button, Text } from './ui';

function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount((count) => count + 1);
  // };

  return (
    <>
      <div>
        {/* <Text text="Hello world" /> */}
        <Text>Hello world</Text>
        <Button />

        {/* <h2>Envs</h2>
        <p>ENV_TARGET_ENV: {import.meta.env.ENV_TARGET_ENV}</p>
        <p>VITE_APP_VERSION: {import.meta.env.VITE_APP_VERSION}</p> */}
      </div>
    </>
  );
}

export default App;
