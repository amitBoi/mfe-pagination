import { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Header } from '@app/components/Header';
import { FullPageLoader } from '@app/components/FullPageLoader';
import { GenericLoader } from '@app/components/GenericLoader';
import { mergeConfig } from './configs';
import { Routing } from './routes';

const App = (props) => {
  const { config } = props;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    mergeConfig(config);
    setReady(true);
  }, []);

  return (
    <HashRouter>
      <nav>
        <Header />
      </nav>
      <div>{ready ? <Routing {...props} /> : <FullPageLoader />}</div>
      <GenericLoader />
    </HashRouter>
  );
};

export default App;
