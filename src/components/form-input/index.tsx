import React from "react";

interface IInput {
  onChange?: (value: string) => void;
  onBlur?: () => void;
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
        onBlur={onBlur}
      />
    </div>
  );
};
Input.displayName = "input";
export default Input;
