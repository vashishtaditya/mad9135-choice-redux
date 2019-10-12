import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch }from 'react-router-dom';

const Users = () => <div>Users</div>
const Posts = (props) => <div>Posts: User #{props.match.params.userId}</div>
const Photos = () => <div>Photos</div>

function AppHeader() {
    return(
        <Router>
        <header className="App-Header">
        <nav>
            <Link to="/users">Users</Link>{' '}
            <Link replace to="/users/posts/123">Posts</Link>{' '}
            <Link to="/users/photos">Photos</Link>
        </nav>
        <hr />
        <Switch>
            <Route path="/users/posts/:userId" component={Posts}/>
            <Route exact={true} path="/users/posts">
                <Posts />
            </Route>            

            <Route exact path="/users" component={Users} />
            <Route exact path="/users/photos" component={Photos} />
        </Switch>
        </header>
        </Router>
    )
}

export default AppHeader