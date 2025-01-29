// function MyText(props) {
//   return <div>{props.message}</div>;
// }

// interface Props {
//   text: string; // React.ReactNode
// }

// const Text : React.FC<TextProps> = ({ text }) => {
// export const Text = ({ text }: Props) => {
//   return <div>{text}</div>;
// };

// export default MyText;

interface Props {
  children: string; // React.ReactNode
}

export const Text = ({ children }: Props) => {
  return <div>{children}</div>; // <Text> Hello world </Text>
};
