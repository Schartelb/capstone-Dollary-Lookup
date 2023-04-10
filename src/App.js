import './App.css';
import React, { useState} from 'react';
import Home from './Routes/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DollaryApi from './api';

function App() {

  return (
    <BrowserRouter>
    
      <main>
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </main>
      
    </BrowserRouter>
  );
}

export default App;
