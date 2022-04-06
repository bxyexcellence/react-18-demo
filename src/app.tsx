import React from "react";
import ReactDOM from "react-dom/client";
import "./base.scss";
import "tailwindcss/tailwind.css"

const App: React.FC = ({}) => {
  return (
  <div className="bg-purple-600 bg-opacity-100">
    hello world
  </div>)
};
const rootElement = document.querySelector("#app");
const root = ReactDOM.createRoot(rootElement!);
root.render(<App />);
