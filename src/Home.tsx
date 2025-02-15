import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

import Routes from './routes';

const Home: React.FC = () => (

<Router>
    <AppProvider>
      <Routes />

    </AppProvider>

  <GlobalStyle/>
</Router>

);
export default Home;
