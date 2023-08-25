import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { loginTokenApi, loginRefreshApi } from '../api/apiRutas'

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(true);

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();

    axios
      .post(loginTokenApi, {
        username,
        password,
      })
      .then(function (response) {
        console.log("data", response.data);

        setAuthTokens(response.data);
        setUser(jwt_decode(response.data.access));
        localStorage.setItem("authTokens", JSON.stringify(response.data));
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);

        alert("Something went wrong!");
      });
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
  };

  const updateToken = () => {
    console.log("Update token called");
    axios
      .post(loginRefreshApi, {
        // refresh: authTokens?.refresh,
        refresh: authTokens.refresh,
      })
      .then(function (response) {
        console.log("data", response.data);

        setAuthTokens(response.data);
        setUser(jwt_decode(response.data.access));
        localStorage.setItem("authTokens", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);

        logoutUser();
      });

    // if (loading) {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    // if (loading) {
    //   updateToken();
    // }

    const fourMinutes = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  const contextValue = useMemo(() => {
    return { user, loginUser, logoutUser, authTokens, setUsername, setPassword };
  }, [loginUser]);

  return (
    <AuthContext.Provider value={contextValue}>
      {/* {loading ? null : children} */}
      {children}
    </AuthContext.Provider>
  );
};
