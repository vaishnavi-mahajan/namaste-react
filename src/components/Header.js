import { useState } from "react"
import {LOGO_URL} from "../utils/constants"


const Header=()=>{
    const [btnName, setbtnName]=useState("Login")
    return(

        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    {/* <li><img className="user" src="https://cdn-icons-png.flaticon.com/512/747/747376.png"> */}
                    <button className="login" onClick={()=>{
                     btnName==="Login" 
                     ? setbtnName("Logout")
                     : setbtnName("Login")
                    }}>{btnName}</button>
                    {/* </img></li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header