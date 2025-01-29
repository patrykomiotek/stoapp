import { v4 as uuidv4 } from 'uuid';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Text } from '../../ui';

export const Generator = () => {
  const [id, setId] = useState<string>(uuidv4());
  // eslint-disable-next-line
  const [counter, setCount] = useState(0);
  const fieldRef = useRef<HTMLInputElement>(null);

  // Object.dee
  // let id = uuidv4();

  // arg1 - callback
  // arg2? - kiedy
  useEffect(() => {
    // mount | update
    console.log('Hello from top');

    if (fieldRef.current) {
      fieldRef.current.focus();
      fieldRef.current.style.border = '#f00 1px solid';
    }

    return () => {
      // unmount
      console.log('unmount top');
    };
  }, []); // mount only

  // arg1 - callback
  // arg2? - kiedy
  useEffect(() => {
    console.log('Hello from counter');

    // }); // every update
    // }, []); // mount only
  }, [counter]); // mount only

  const handleClick = useCallback(() => {
    // id = uuidv4();
    // console.log({ id });
    //
    setId(uuidv4());
    // setId5(5);
    // setId3(5);
  }, []);

  return (
    <>
      <div>
        <input ref={fieldRef} />
        <Button label="Generate" bgColor="peterRiver" onClick={handleClick} />
        <Text>UUID</Text>
        <Text>{id}</Text>
      </div>
    </>
  );
};
