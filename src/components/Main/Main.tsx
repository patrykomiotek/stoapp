type Props = {
  children: React.ReactNode;
};

export const Main = ({ children }: Props) => {
  return (
    <div>
      <h2 className="text-2xl">Main</h2>
      <div>{children}</div>
    </div>
  );
};
