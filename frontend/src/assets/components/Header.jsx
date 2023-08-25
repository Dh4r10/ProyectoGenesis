import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  
  return (
    <div>
      {user ? (
        <p onClick={logoutUser} style={{color:"black"}}>Logout</p>
      ):(
        <p>Login</p>
      )}
    </div>
  );
};

export default Header;
