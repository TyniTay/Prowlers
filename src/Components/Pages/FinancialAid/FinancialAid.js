import React from 'react';
import './FinancialAid.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const schoolYears=["2020-2021","2019-2020","2018-2019","2017-2018","2016-2017","2015-2016","2014-2015"]
const defaultOption=schoolYears[0];

function dropDown(){
    return(
        <Dropdown options={schoolYears} onChange={schoolYears._onSelect} value={defaultOption} 
            placeholder="Select an option" className='dropDown'/>
    )
}

function docUpload(){
    return(
    <p className="secureDocBox">
    <a className = "docUpload" 
        href="https://financialaid.lmu.edu/generalinformation/securedocumentupload/" 
        target="_blank" rel="noopener noreferrer">Secure Document Upload
    </a> 
    </p>
    )
}

const FinancialAid = props => {
    return(
        <div className='financePage'>
            <h1 className="financialheader">Financial Aid</h1>
            
            <p className='yearSelect'>
                Financial Aid Status: 
            </p>
            {dropDown()}
            
            {docUpload()}

            <p className='award'>
                Financial Aid Award:
                <br/>
                <br/>
                <br/>
                <p className="entry">$XXXXXX</p>
                <br/>
                <a className = "fullaccount" 
                href="https://banner-web.lmu.edu:8080/pls/pbanr/bwskoacc.P_ViewAcct" 
                target="_blank" rel="noopener noreferrer">View full account numbers -{">"}
                </a> 
            </p>

            <p className="standing">
                Academic Standing<br/><br/><br/>
                <p className="entry">Good</p>
            </p>

            <p className="holds">
                Holds<br/><br/><br/>
                <p className="entry">No Holds at this time</p>
            </p>

            <p className='payment'>
                Award Payment Schedule
                <table className="table">
                <tr> <td> Award   </td> <td> Expected Date </td> <td>      Paid to Date</td> </tr>
                <tr> <td> X </td> <td> xx/xx/xx </td> <td>X</td>  </tr> 
                <tr> <td> X </td> <td> xx/xx/xx </td> <td>X</td>  </tr> 
                <tr> <td> X </td> <td> xx/xx/xx </td> <td>X</td>  </tr> 
                </table> 
            </p>
        </div>
    )
}

export default FinancialAid

