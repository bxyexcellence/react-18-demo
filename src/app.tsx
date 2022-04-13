import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//import "./base.scss";
import "tailwindcss/tailwind.css";

import FormHandle from "./components/form-handle";
import FromAuto from "./components/form-auto";
import FormItem from "./components/form-item";
import Input from "./components/form-input";
import TextArea from "./components/form-text-eara";
import SingleleChoice from "./components/form-single-choice/index";
import MultipleChoice from "./components/form-multiple-choice";

const App: React.FC = ({}) => {
  /* const [formDate, setFormDate] = useState({
    name: "name",
    email: "email",
    text: "text"
  }); */
  const initData = {
    name: "",
    email: "",
    text: "",
    singleChoice: "",
    multipleChoice: [],
  };
  const validator = {
    name: [{ required: true, message: "用户名是必填项，请填写~" }],
    email: [{ required: true, message: "邮箱是必填项，请填写~" }],
    text: [{ required: true, message: "文本是必填项，请填写~" }],
    /*  multipleChoice: [{
      validator(rule, value, callback, source, options) {
        console.log(value);
        const errors = []
        if (!value[0]) {
          //options.messages = '必填'
          //callback('必填')
          errors.push(new Error('必填'))
        }
       // debugger
        return errors
        // 当符合第一个规则之后，才会进行后面的校验
       
      }
    }] */
  };
  const singleChoiceDataSource = [
    {
      title: "单选1",
      value: "1",
    },
    {
      title: "单选2",
      value: "2",
    },
    {
      title: "单选3",
      value: "3",
    },
  ];
 /*  const formItemType = {
    name: "form_input",
    email: "form_input",
    text: "form_textarea",
    singleChoice: "form_single_choice",
    multipleChoice: "form_multip_choice",
  } */
  const formDataSource = {
    name: {
      label: '名字',
      type: "form_input",
      dataSource: null
    },
    email: {
      label: '邮箱',
      type: "form_input",
      dataSource: null
    },
    text: {
      value: '',
      label: '文本',
      type: "form_textarea",
      dataSource: null
    },
    singleChoice: {
      label: '单选',
      type: "form_single_choice",
      dataSource: singleChoiceDataSource
    },
    multipleChoice: {
      label: '多选',
      type: "form_multip_choice",
      dataSource: singleChoiceDataSource
    }
  }
  const handleEnter = (formValue: any) => {
    console.log({ formValue });
  };
  return (
    <div>
      <h2>自定义form</h2>
      <FormHandle
        value={initData}
        onEnter={handleEnter}
        validator={validator}
      >
        <FormItem name="name" label="名字">
          <Input />
        </FormItem>
        <FormItem name="email" label="邮箱">
          <Input />
        </FormItem>
        <FormItem name="text" label="文本">
          <TextArea />
        </FormItem>
        <FormItem name="singleChoice" label="单选">
          <SingleleChoice dataSource={singleChoiceDataSource} />
        </FormItem>
        <FormItem name="multipleChoice" label="多选">
          <MultipleChoice dataSource={singleChoiceDataSource} />
        </FormItem>
      </FormHandle>
      <h2>自动form</h2>
      <FromAuto validator={validator} formDataSource={formDataSource} value={initData} />
    </div>
  );
};
const rootElement = document.querySelector("#app");
const root = ReactDOM.createRoot(rootElement!);
root.render(<App />);
