import React from 'react';
import { BrowserRouter as Router, Route, Switch }from 'react-router-dom';
import AppUsers from './AppUsers'


class App extends React.Component {
  
  render () {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={AppUsers} />

        </Switch>
      </Router>
    );
  }
}


export default App;
