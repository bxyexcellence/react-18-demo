import React from "react";

interface MultipleChoice {
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  value?: string;
  dataSource?: {
    title: string;
    value: string;
  }[];
}
const SingleChoice: React.FC<MultipleChoice> = ({
  onChange,
  onBlur,
  value,
  dataSource,
}) => {
  return (
    <div className="flex space-x-4">
      {dataSource?.map((item) => (
        <div onClick={() => onChange?.(item.value)} key={item.value}
          className={`p-3 pt-1 pb-1 rounded-sm border border-gray-300 text-gray-500 cursor-pointer ${
            value === item.value && "text-blue-600 border-blue-500"
          }`}
        >
          {item.value}
        </div>
      ))}
    </div>
  );
};
SingleChoice.displayName = "SingleChoice";
export default SingleChoice;
