import React from "react";
import { flushSync } from "react-dom";

interface MultipleChoice {
  onChange?: (value:string[]) => void;
  onBlur?: (value:string[]) => void;
  value?: string[];
  dataSource?: {
    title: string;
    value: string;
  }[];
}
const MultipleChoice: React.FC<MultipleChoice> = ({
  onChange,
  onBlur,
  value,
  dataSource,
}) => {
  const handleChange = (itemValue: string) => {
    let newValue:string[] = []
      if(value?.includes(itemValue)){
        newValue = value?.filter(item => item !== itemValue)
      }else {
        newValue = [...value!, itemValue]
      }
      onChange?.(newValue)
   /*  flushSync(() =>{
      return onChange?.(newValue);
    } ) */
   // onBlur?.(newValue)
  }
  return (
    <div className="flex space-x-4">
      {dataSource?.map((item) => (
        <div onClick={() => handleChange(item.value)} key={item.value}
          className={`p-3 pt-1 pb-1 rounded-sm border border-gray-300 text-gray-500 cursor-pointer ${
            value?.includes(item.value) && "text-blue-600 border-blue-500"
          }`}
        >
          {item.value}
        </div>
      ))}
    </div>
  );
};
MultipleChoice.displayName = "MultipleChoice";
export default MultipleChoice;
