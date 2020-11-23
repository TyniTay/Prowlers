import React from 'react';
import logo from './lmu.png';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import { BrowserRouter as Router, Switch, 
Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
    {/*<Dashboard />*/}
    </>
  );
}

export default App;
