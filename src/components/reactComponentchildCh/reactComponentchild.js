import React from "react";
import "../asset/css/Common.css";
const Componentchild =(props)=>{
    return(
        <>
        <h1 className="box">
        Componentchild {props.children}
        </h1>
        </>
    )
}
export default Componentchild