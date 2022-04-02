import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
const App: React.FC = ({}) => {
  return (
  <div className="hello-world">
    hello world
  </div>)
};
const rootElement = document.querySelector("#app");
const root = ReactDOM.createRoot(rootElement!);
root.render(<App />);
