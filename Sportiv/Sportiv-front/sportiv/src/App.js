import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import EventDetail from '../src/components/event-detail-component/EventDetail'
import EventsList from '../src/components/events-list-component/EventsList'
import Header from './components/header-component/HeaderComponent';
import SearchPage from './components/search-page-component/SearchPageComponent';
import Home from './components/home-component/HomePageComponent';
import Explore from './components/explore-component/ExplorePageComponent';
import Profile from './components/profile-component/ProfileComponent';
import GroupList from './components/groups-list-component/GroupListComponent';
import GroupDetail from './components/group-detail-component/GroupDetailComponent';


function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/events" exact component={EventsList}/>
          <Route path="/events/:eventId"  component={EventDetail}/>
          <Route path="/groups" exact  component={GroupList}/>
          <Route path="/groups/:groupId"  component={GroupDetail}/>
          <Route path="/search"  component={SearchPage}/>
          <Route path="/explore"  component={Explore}/>
          <Route path="/profile"  component={Profile}/>
        </Switch>
    </Router>
   
  );
}

export default App;
