interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextField: React.FC<TextFieldProps> = (props) => {
  return <input type="text" {...props} />;
};

export default TextField;
