import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './styles.css'
import Home from './components/home'
import Teamweihts from './components/teamweights'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
          <Route path="/teamweights" component={Teamweihts}/>
        </BrowserRouter>

    </div>
  );
}

export default App;
