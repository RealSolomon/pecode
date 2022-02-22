import React from 'react';
import './index.css';
import { HashRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import useRoutes from './routes';

function App() {
  const routes = useRoutes();
  return (
    <HashRouter>
      <Navigation />
      {routes}
    </HashRouter>
  );
}

export default App;
