import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import EventDetail from '../src/components/event-detail-component/EventDetail'
import EventsList from '../src/components/events-list-component/EventsList'


function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/events" exact component={EventsList}/>
          <Route path="/events/:eventId" exact component={EventDetail}/>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
