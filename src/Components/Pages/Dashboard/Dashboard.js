import React from 'react'
import {getName} from "../../../App";
import Profile from '../StudentInfo/StudentInfo'
import FinancialAid from '../FinancialAid/FinancialAid'
import Registration from '../Registration/Registration'

const Dashboard = () => {
    return(
        <div>
            {"Welcome to Your Dashboard, "+getName()+"!"}
        </div>
    )
}

export default Dashboard