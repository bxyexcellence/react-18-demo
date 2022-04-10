import React from "react";
//import Schema from 'async-validator';
import useForm from "&/hooks/useForm";
interface IChild {
  onChange: (value: string) => void;
  value: number | string;
  props: any;
}
interface Ifrom {
  value: any;
  validator: Object;
  onChange?: (key: string, value: string | number) => void;
  onEnter?: (value: Object) => void;
  onReset?: () => void;
}
const From: React.FC<Ifrom> = ({
  children,
  onChange,
  value,
  validator,
  onEnter,
  onReset,
}) => {
  const {
    formDate, errors, setFiledValue, handleValitale, reSetForm
  } = useForm(value, validator)
 /*  const descriptor = {...validator}
  const validators = new Schema(descriptor);
  const handleChange = (name: string, itemvalue: string) => {
    validators.validate({...value,[name]: itemvalue}, (error, filed) => {
      console.log({error, filed});
      
    })
    onChange(name, itemvalue)
  } */
  const renderChildren = () => {
    const childrenArr: React.FC<IChild>[] = [];
    React.Children.forEach(children, (child) => {
    //  if (child.type.displayName === "formItem") {
        const { name } = child.props;
        const item = React.cloneElement(
          child,
          {
            key: name,
            onChange: (value: string) => setFiledValue(name, value),
            onBlur: () => handleValitale({[name]: formDate[name]}),
            value: formDate[name],
            error: errors[name]
          },
          child.props.children
        );
        childrenArr.push(item);
  //   }
    });
    return childrenArr;
  };
  return (
    <div>
      {renderChildren()}
      <button
        onClick={() => onEnter?.(formDate)}
        className="border rounded bg-green-200 text-white p-1 ml-2 text-sm"
      >
        确认
      </button>
      <button
        onClick={() => reSetForm()}
        className="border rounded bg-red-400 text-white p-1 ml-4 text-sm"
      >
        重置
      </button>
    </div>
  );
};
From.displayName = "form";
export default From;
