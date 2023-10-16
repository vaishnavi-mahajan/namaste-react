import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = (theme) => {
  const [btnName, setbtnName] = useState("Login");

  const onlinestatus = useOnlineStatus();

  const loggedInUser = useContext(UserContext);
  console.log(loggedInUser)

  const headerClasses = `bg-${theme === "dark" ? "black" : "white"} text-${
    theme === "dark" ? "white" : "black"
  }`;



  return (
    <header className={headerClasses}>
      <div className="flex justify-between shadow-lg sticky z-20 bg-white">
        <div>
          <img className="w-[250px] max-w-xs" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-8 text-xl font-bold">
            <li className="px-8 ">
              Online Status:{onlinestatus ? "🟢" : "🔴"}
            </li>
            <li className="px-8">
              <Link to="/">Home</Link>
            </li>
            <li className="px-8">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-8">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-8">Cart</li>
            <li className="px-8">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="font-bold px-4">{loggedInUser.loggedInUser}</li>
            <button
              className="px-8"
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}>
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
