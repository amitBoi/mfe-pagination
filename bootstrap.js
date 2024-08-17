import ReactDOM from "react-dom/client";
import { App } from "./src/App";

export const mount = (element) => {
  ReactDOM.createRoot(element).render(<App />);
};

mount(document.getElementById("root"));
