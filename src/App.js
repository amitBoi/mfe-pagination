import { HashRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Routing } from "./routes";

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
