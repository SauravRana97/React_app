import { useState } from "react";

const Customhook = ()=>{
    const [name,setname] = useState("saurav")
   const changename =(value)=>{
    setname(value)
   }
    return{
        name,
        changename
    }
}
export default Customhook