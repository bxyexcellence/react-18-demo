import React from "react";
import FormItem from "./form-item";
import useForm from "&/hooks/useForm";
interface Ifrom {
  value: any;
  formDataSource: Object;
  validator: Object;
  onChange?: (key: string, value: string | number) => void;
  onEnter?: (value: Object) => void;
  onReset?: () => void;
}
const From: React.FC<Ifrom> = ({
  formDataSource,
  validator,
  onEnter,
  onReset,
  value
}) => {
  //const initValue = ;
  const { formDate, errors, setFiledValue, handleValitale, reSetForm } = useForm(value, validator)
  //debugger
  /*  const descriptor = {...validator}
  const validators = new Schema(descriptor);
  const handleChange = (name: string, itemvalue: string) => {
    validators.validate({...value,[name]: itemvalue}, (error, filed) => {
      console.log({error, filed});
      
    })
    onChange(name, itemvalue)
  } */

  /* dataSource?: {
    title: string;
    value: string;
  }[]
  name: string;
  label: string;
  error: string;
  type: string; */
  /*  name: {
      value: '',
      label: '名字',
      type: "form_input",
      dataSource: null
    }, */
    const handleChange = (key, value) => {
      setFiledValue(key, value)
    }
  return (
    <div>
      {Object.keys(formDate).map((item) => {
        const itemValue = formDataSource[item];
        return (
          <FormItem
            value={formDate[item]}
            key={item}
            onChange={(value: any) => handleChange(item, value)}
            onBlur={(value: any) => handleValitale({ [item]: value })}
            label={itemValue.label}
            error={errors[item]}
            name={item}
            type={itemValue.type}
            dataSource={itemValue.dataSource}
          />
        );
      })}
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
      <button
        onClick={() => handleValitale(formDate)}
        className="border rounded bg-blue-200 text-white p-1 ml-2 text-sm"
      >
        校验全部
      </button>
    </div>
  );
};
From.displayName = "form";
export default From;
