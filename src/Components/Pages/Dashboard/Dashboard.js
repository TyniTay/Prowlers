import React from 'react'
import {userName as userName} from "../../../App";
import Profile from '../StudentInfo/StudentInfo'
import FinancialAid from '../FinancialAid/FinancialAid'
import Registration from '../Registration/Registration'

const Dashboard = () => {
    return(
        <div>
            {"Welcome to Your Dashboard, "+userName+"!"}
        </div>
    )
}

export default Dashboard