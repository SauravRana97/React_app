import React from 'react'
import "../asset/css/Common.css";
import pic from "../asset/img/homebg.png"
const Reactimg = ()=>{
    return (
        <div className='box'>
            <h1>React img Component</h1>
            <img src={pic} style={{width:"50%",height:"50%"}} alt='bgimg'></img>
        </div>
    )
}
export default Reactimg