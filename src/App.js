import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';

class App extends React.Component{
  constructor( props ){
    super( props )
    this.state = {
      firstName : 'Alex',
      lastName : 'Miller',
      age : 25,
      id : 12345
    }
  }

  render(){
    return(
      <Router>
        <div>
          <h1>
            This is a Routing practice
          </h1>
          
          <ul>
            <li>
              <Link to="/">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={'/profile/' + this.state.id }>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
          </ul>
          <Route path="/profile/:id" render={(routeProps) => <Profile {...routeProps} user={this.state} />} />

          <Route path="/login" render={() => <Login />} />

        </div>
      </Router>
    );
  }
}

export default App;
