import React from "react";

interface IInput {
  onChange?: (value: string) => void;
  onBlur?: (value: any) => void;
  value?: string;
}
const Input: React.FC<IInput> = ({ onChange, onBlur, value }) => {
  return (
    <div>
      <input
        className="rounded-sm border"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange?.(e.target.value)
        }
        onBlur={(e) => onBlur?.(e.target.value)}
      />
    </div>
  );
};
Input.displayName = "input";
export default Input;
