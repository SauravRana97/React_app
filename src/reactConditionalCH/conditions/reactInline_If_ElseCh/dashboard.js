import React from 'react'
import "../../../asset/css/Common.css"

const Dashboard =(props)=>{
    return(
        <div className="box">
            <h1>Welcome User</h1>
           <button type='button' onClick={() => props.logout()}> Logout</button> 
        </div>
    )
}
export default Dashboard