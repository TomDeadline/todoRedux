import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Signin from './Signin';
import Registration from './Registration';
import ToDo from './ToDo';


const App = () => (
  <Router>
    <div>
      <ul>
        <h1>ToDo list</h1>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/todo">ToDo</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/registration" component={Registration}/>
      <Route path="/todo" component={ToDo}/>
    </div>
  </Router>
);
export default App
