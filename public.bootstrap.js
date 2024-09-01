import ReactDOM from 'react-dom/client';
import mfeDefination from './mfe.def';
const App = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <h1>{mfeDefination.name} is running successfully!</h1>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
