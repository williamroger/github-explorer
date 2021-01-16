import React from 'react';
import Routes from './router';
import { BrowserRouter } from 'react-router-dom';
const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)


export default App;
