import React from "react";

interface IInput {
  onChange?: (value: string) => void;
  value?: string;
}
const Input: React.FC<IInput> = ({onChange, value}) => {
  return (
    <div>
      <input className="rounded-sm border" value={value} onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)} />
    </div> 
  )
}
Input.displayName = 'input'
export default Input