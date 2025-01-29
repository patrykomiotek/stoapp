import { v4 as uuidv4 } from 'uuid';
import { useCallback, useState } from 'react';
import { Button, Text } from '../../ui';

export const Generator = () => {
  const [id, setId] = useState<string>(uuidv4());
  // let id = uuidv4();

  const handleClick = useCallback(() => {
    // id = uuidv4();
    // console.log({ id });
    setId(uuidv4());
  }, []);

  return (
    <>
      <div>
        <Button label="Generate" bgColor="peterRiver" onClick={handleClick} />
        <Text>UUID</Text>
        <Text>{id}</Text>
      </div>
    </>
  );
};
