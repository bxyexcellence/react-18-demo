import React, { memo } from "react";

interface IItem {
  onChange?: (value: string) => void;
  onBlur?: (value: any) => void;
  value?: number | string | string[];
  name: string;
  label: string;
  error: string;
}

const FromItem: React.FC<IItem> = ({children, onChange, onBlur, value, name, label, error}) => {
  console.log(name + '的itemchange了');
  
  return (
    <div className="flex items-baseline">
      <div className="mx-4 my-2">
        {label}:
      </div>
      <div>
      {React.cloneElement(children, {onChange,onBlur, value})}
      <div className="text-xs text-red-600">
        {error}
      </div>
      </div>
    </div>
  )
}
FromItem.displayName = 'formItem'
//性能优化
export default memo(FromItem, (prev, next) => next.value === prev.value && next.error === prev.error)