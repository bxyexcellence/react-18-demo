import React from "react";

interface IItem {
  onChange?: (value: string) => void;
  value?: number | string;
  name: string;
  label: string
}

const FromItem: React.FC<IItem> = ({children, onChange, value, name, label}) => {
  return (
    <div className="flex items-center">
      <div className="mx-4 my-2">
        {label}:
      </div>
      {React.cloneElement(children, {onChange, value})}
    </div>
  )
}
FromItem.displayName = 'formItem'
export default FromItem