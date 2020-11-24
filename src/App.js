import React from 'react';
import './App.css';
import logo from './lmu.png';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'


import Profile from './Components/Pages/Profile/Profile'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Accounts from './Components/Pages/Accounts/Accounts'
import Registration from './Components/Pages/Registration/Registration'
import Records from './Components/Pages/Records/Records'
import FinancialAid from './Components/Pages/FinancialAid/FinancialAid'
import Resources from './Components/Pages/Resources/Resources'
import Settings from './Components/Pages/Settings/Settings'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Profile} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/accounts' exact component={Accounts} />
        <Route path='/registration' exact component={Registration} />
        <Route path='/records' exact component={Records} />
        <Route path='/financial aid' exact component={FinancialAid} />
        <Route path='/resources' exact component={Resources} />
        <Route path='/settings' exact component={Settings} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
