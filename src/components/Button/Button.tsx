import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

const Button: React.FC<Props> = ({ loading, children, ...props }) => {
  return (
    <button type="button" disabled={loading} {...props}>
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
