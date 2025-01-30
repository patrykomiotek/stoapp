// import { useState } from 'react';
import { MagicButton } from '@ui';
import './App.css';
// import { Generator } from './components/Generator';
import { useEffect, useRef } from 'react';
import { LoginFormState } from '@components/LoginFormState';
import { LoginFormRefs } from '@components/LoginFormRefs';
import { LoginFormRHF } from '@components/LoginFormRHF';

// import Kaczka from './ui/Text/Text';
// import { Text } from './ui/Text/Text';
// import { Text } from './ui/Text';
// import { Button, Text } from './ui';

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount((count) => count + 1);
  // };

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = 'red';
    }
  }, []);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = 'green';
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = 'blue';
    }
  };

  return (
    <>
      <div>
        <LoginFormRHF />
        {/* <LoginFormRefs /> */}
        {/* <LoginFormState /> */}
        {/* <Text text="Hello world" /> */}
        {/* <Text>Hello world</Text> */}
        {/* <Button label="Click me" bgColor="peterRiver" /> */}
        {/* <Generator /> */}
        {/* <MagicButton
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          label="Click me"
          onConfirm={() => null}
        />
        <MagicButton
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          label="Click me2"
          onConfirm={() => null}
        />
        <MagicButton
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          label="Click me"
          onConfirm={() => null}
        /> */}

        {/* <h2>Envs</h2>
        <p>ENV_TARGET_ENV: {import.meta.env.ENV_TARGET_ENV}</p>
        <p>VITE_APP_VERSION: {import.meta.env.VITE_APP_VERSION}</p> */}
      </div>
    </>
  );
}

export default App;
