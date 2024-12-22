import React, { useState } from "react";

interface ButtonProps {
  buttonLabel: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  onButtonClick: (count: number) => void;
}

const Button = ({ buttonLabel, color = 'primary', onButtonClick }: ButtonProps) => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      className={'btn btn-' + color}
      onClick={() => {
        setCounter(counter + 1);
        onButtonClick(counter + 1)
      }}
    >
      {buttonLabel}
    </div>
  );
};

export default Button;
