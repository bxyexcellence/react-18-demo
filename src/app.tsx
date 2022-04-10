import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//import "./base.scss";
import "tailwindcss/tailwind.css";

import Form from "./components/form";
import FormItem from "./components/form-item";
import Input from "./components/form-input";
import TextArea from "./components/form-text-eara";

const App: React.FC = ({}) => {
  /* const [formDate, setFormDate] = useState({
    name: "name",
    email: "email",
    text: "text"
  }); */
  const initData = {
    name: "name",
    email: "email",
    text: "text"
  }
  const validator = {
    name: [{ required: true, message: "用户名是必填项，请填写~" }],
    email: [{ required: true, message: "邮箱是必填项，请填写~" }],
    text: [{ required: true, message: "文本是必填项，请填写~" },]
  };
 /*  const handleChange = (key: string, value: string | number) => {
    setFormDate({
      ...formDate,
      [key]: value,
    });
  };
  const handleEnter = (formValue: any) => {
    console.log({ formValue });
  }; */
  /* const handleReset = () => {
    setFormDate({
      name: "",
      email: "",
      text: ""
    });
  }; */
  const handleEnter = (formValue: any) => {
    console.log({ formValue });
  };
  return (
    <div>
      <Form
        value={initData}
/*         onChange={handleChange}
        onEnter={handleEnter} */
       // onReset={handleReset}
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
      </Form>
    </div>
  );
};
const rootElement = document.querySelector("#app");
const root = ReactDOM.createRoot(rootElement!);
root.render(<App />);
