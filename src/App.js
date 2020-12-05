import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'


import StudentInfo from './Components/Pages/StudentInfo/StudentInfo'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Registration from './Components/Pages/Registration/Registration'
import Records from './Components/Pages/Records/Records'
import FinancialAid from './Components/Pages/FinancialAid/FinancialAid'
import Resources from './Components/Pages/Resources/Resources'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/student-info' exact component={StudentInfo} />
        <Route path='/registration' exact component={Registration} />
        <Route path='/records' exact component={Records} />
        <Route path='/financial-aid' exact component={FinancialAid} />
        <Route path='/resources' exact component={Resources} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
