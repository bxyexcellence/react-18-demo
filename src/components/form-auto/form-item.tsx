import React, { memo } from "react";
import FormInput from '../form-input'
import FromTextarea from '../form-text-eara'
import FormSingleChoice from '../form-single-choice'
import FormMultipleChoice from '../form-multiple-choice'
interface IItem {
  onChange?: (value: string) => void;
  onBlur?: (value: any) => void;
  value?: number | string | string[];
  dataSource?: {
    title: string;
    value: string;
  }[]
  name: string;
  label: string;
  error: string;
  type: string;
}
interface formItemBase {
  onChange?: (value: string) => void;
  onBlur?: (value: any) => void;
  value?: any;
  dataSource?: {
    title: string;
    value: string;
  }[];
}
const itemTypeMap = {
  ['form_input']: (props: formItemBase) => <FormInput {...props} />,
  ['form_textarea']: (props: formItemBase) => <FromTextarea {...props} />,
  ['form_single_choice']: (props: formItemBase) => <FormSingleChoice {...props} />,
  ['form_multip_choice']: (props: formItemBase) => <FormMultipleChoice {...props} />
}

const FromItem: React.FC<IItem> = ({onChange, onBlur, value, name, label, error, type, dataSource}) => {
  console.log(name+ '的item执行了');
  
  return (
    <div className="flex items-baseline">
      <div className="mx-4 my-2">
        {label}:
      </div>
      <div>
      {itemTypeMap[type]({onChange, onBlur, value, dataSource})}
      <div className="text-xs text-red-600">
        {error}
      </div>
      </div>
    </div>
  )
}
FromItem.displayName = 'formItem'
//性能优化
export default memo(FromItem, (prev, next) => next.value === prev.value && next.name === prev.name && next.error === prev.error)