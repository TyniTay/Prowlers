import React from 'react'
import './Dashboard.css'
import {getUsername} from "../../../Data";
import Profile from '../StudentInfo/StudentInfo'
import FinancialAid from '../FinancialAid/FinancialAid'
import Registration from '../Registration/Registration'
import Card from '@material-ui/core/Card';
import { CardActions, CardContent, Typography, Button } from '@material-ui/core';

const Dashboard = () => {
    return (
        <html>
            <head><title> Dashboard </title></head>
            <body>
                {/* Title of the page w/ welcome message to getUsername
                  * Time and date at the right hand corner */}
                <div className="welcomeMessage">
                    <h3> Dashboard </h3>
                    <br></br>
                    <h1> {"Welcome, " + getUsername() + "!"} </h1>
                </div>

                <div className="dateTime">
                    <h5> Date/Time Placeholder</h5>
                </div>

                <div className="recentUpdates">
                    <h4> Recent Updates </h4>
                    <Card className="card1">
                    <CardContent>
                    <Typography variant="h6">
                        Registration date and time has been updated!
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Dismiss</Button> 
                    </CardActions> 
                    </Card>
                </div>

            </body>
        </html>

    )
}


export default Dashboard