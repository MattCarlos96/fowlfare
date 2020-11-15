
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
import Menu from './components/Menu';
import Find from './components/Find';
import About from './components/About';
import './components/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Find" component={Find}/>
          <Route path="/About" component={About}/>
        </Switch>
      </div>
    </Router>
  )

}

export default App;
