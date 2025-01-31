import { Button, Input, Text } from '@ui';

export const Stepper = () => {
  return (
    <div className="flex flex-col max-w-2xl mt-4">
      <div className="flex">
        <div className="w-1/3">
          <Button label="-" />
        </div>
        <div className="w-1/3 flex justify-center">
          <Text>value</Text>
        </div>
        <div className="w-1/3 flex justify-end">
          <Button label="+" />
        </div>
      </div>
      <div>
        <Input label="" />
      </div>
    </div>
  );
};
