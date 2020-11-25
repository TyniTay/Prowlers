import React, {useState, useEffect} from "react";
import './App.css';
import logo from './lmu.png';
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
        <Route path='/' exact component={StudentInfo} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/registration' exact component={Registration} />
        <Route path='/records' exact component={Records} />
        <Route path='/financial aid' exact component={FinancialAid} />
        <Route path='/resources' exact component={Resources} />
      </Switch>
    </Router>
    </>
  );
}

const user = {
  name: 'Jordan Johnson'
}

const getName = () => user.name
const setName = name => {
  console.log("SETTING NAME")
  user.name = name}

const userName = "Jordan Johnson"
export {getName, setName}
export default App;
