import { useState } from "react"
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header=()=>{
    const [btnName, setbtnName]=useState("Login")
    const [toggle, settoggle]=useState("dark")

    const onlinestatus=useOnlineStatus()

    return(
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul className="links">
                    <li>Online Status:{onlinestatus?"🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    {/* <li><img className="user" src="https://cdn-icons-png.flaticon.com/512/747/747376.png"> */}
                    <button className="login" onClick={()=>{
                     btnName==="Login" 
                     ? setbtnName("Logout")
                     : setbtnName("Login")
                    }}>{btnName}</button>

                    <button className="theme" onClick={()=>{
                     toggle==="dark" 
                     ? settoggle("light")
                     : settoggle("dark")
                    }}>{toggle}</button>
                    {/* </img></li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header