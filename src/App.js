import { HashRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Routing } from "./routes";
import "./style.css";

const App = () => (
  <HashRouter>
    <nav>
      <Header />
    </nav>
    <div>
      <Routing />
    </div>
  </HashRouter>
);

export default App;
