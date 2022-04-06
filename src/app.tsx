import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//import "./base.scss";
import "tailwindcss/tailwind.css";

import Form from "./components/form";
import FormItem from "./components/form-item";
import Input from "./components/form-input";

const App: React.FC = ({}) => {
  const [formDate, setFormDate] = useState({
    name: "name",
    email: "email",
  });
  const handleChange = (key: string, value: string | number) => {
    setFormDate({
      ...formDate,
      [key]: value,
    });
  };
  const handleEnter = (formValue: any) => {
    console.log({ formValue });
  };
  const handleReset = () => {
    setFormDate({
      name: "",
      email: "",
    });
  };
  return (
    <div>
      <Form
        value={formDate}
        onChange={handleChange}
        onEnter={handleEnter}
        onReset={handleReset}
      >
        <FormItem name="name" label="名字">
          <Input />
        </FormItem>
        <FormItem name="email" label="邮箱">
          <Input />
        </FormItem>
      </Form>
    </div>
  );
};
const rootElement = document.querySelector("#app");
const root = ReactDOM.createRoot(rootElement!);
root.render(<App />);
