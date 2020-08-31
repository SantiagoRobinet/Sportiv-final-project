import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import EventDetail from '../src/components/event-detail-component/EventDetail'


function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={EventDetail}/>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
