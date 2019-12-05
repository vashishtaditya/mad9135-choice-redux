import React from 'react';
import { BrowserRouter as Router, Route, Switch }from 'react-router-dom';
import AppUsers from './AppUsers'
import AppComments from './AppComments'
import AppPosts from './AppPosts'
import AppUserDetail from './AppUserDetail'
import AppTodos from './AppTodos'
import './App.css';

class App extends React.Component {
  
  render () {
   
 
  
    return (

     
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={AppUsers} />
          <Route path="/users/:id" component={AppUserDetail}/>
          <Route path="/posts/:userId" component={AppPosts}/>
          <Route path="/todos/:userID" component={AppTodos}/>
          <Route path="/comments/:ID" component={AppComments}/>     
        </Switch>
      </Router>
    
  
    );
  }
}


export default App;
