import { HashRouter } from 'react-router-dom';
import { Header } from '@components/Header';
import { GenericLoader } from '@components/GenericLoader';
import { Routing } from './routes';

const App = () => (
  <HashRouter>
    <nav>
      <Header />
    </nav>
    <div>
      <Routing />
    </div>
    <GenericLoader />
  </HashRouter>
);

export default App;
