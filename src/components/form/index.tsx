import React from "react";

interface IChild {
  onChange: (value: string) => void;
  value: number | string;
  props: any;
}
interface Ifrom {
  value: any;
  onChange: (key: string, value: string | number) => void;
  onEnter: (value: Object) => void;
  onReset: () => void;
}
const From: React.FC<Ifrom> = ({
  children,
  onChange,
  value,
  onEnter,
  onReset,
}) => {
  const renderChildren = () => {
    const childrenArr: React.FC<IChild>[] = [];
    React.Children.forEach(children, (child) => {
      if (child.type.displayName === "formItem") {
        const { name } = child.props;
        const item = React.cloneElement(
          child,
          {
            key: name,
            onChange: (value: string) => onChange(name, value),
            value: value[name],
          },
          child.props.children
        );
        childrenArr.push(item);
      }
    });
    return childrenArr;
  };
  return (
    <div>
      {renderChildren()}
      <button
        onClick={() => onEnter(value)}
        className="border rounded bg-green-200 text-white p-1 ml-2 text-sm"
      >
        确认
      </button>
      <button
        onClick={() => onReset()}
        className="border rounded bg-red-400 text-white p-1 ml-4 text-sm"
      >
        重置
      </button>
    </div>
  );
};
From.displayName = "form";
export default From;
