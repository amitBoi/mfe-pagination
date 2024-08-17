import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Routing } from "./routes";
import "./style.css";

export const App = () => (
  <BrowserRouter>
    <nav>
      <Header />
    </nav>
    <div>
      <Routing />
    </div>
  </BrowserRouter>
);
