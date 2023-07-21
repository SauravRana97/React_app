import React from "react";
import "./css/Common.css"

const ReactEvent =() =>{
    let name = "saurav"

const clickbtn = (value)=>{
    let a = value
    console.log("Button Clicked",name)
    name = a
    // document.getElementsByClassName("button").style.display="show";

    
}

    return(
        <>
        <h1>React Event</h1>
        <button onClick={()=>clickbtn("Shweta")}>click me</button>
        <h1>{name}</h1>
        <h1 id="person" className="button">{name}</h1>
        </>
    )
}   

export default ReactEvent;