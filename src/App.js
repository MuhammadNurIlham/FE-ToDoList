import React, { useEffect, useState, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { API, setAuthToken } from "./config/API";
import { UserContext } from "./context/UserContext";

import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from "./pages/LandingPage";
import PrivateRoute from "./pages/PrivateRoute";
import LandingPageLogin from "./pages/LandingPageLogin";


// init token on axios every time the app is refreshed
if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'));
};


function App() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useContext(UserContext);
  console.log(state);

  const checkUser = async () => {
    try {
      if (localStorage.token) {
        setAuthToken(localStorage.token)
      }

      const response = await API.get('/check-auth');

      let payload = response.data.data;
      payload.token = localStorage.token;
      console.log("this payload check user", payload);

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });

      if (response.data.code === 200) {
        setIsLoading(false);
      };

    } catch (error) {
      if (error.response.data.code === 401) {
        navigate('/')
      };
      console.log("ini error check-user auth", error);
      setIsLoading(false);
    };
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setAuthToken(localStorage.getItem('token'));
    };
    if (state.isLogin === false && !isLoading) {
      navigate('/');
    };
  }, [state]);



  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading... Please Wait.....</h1>
      ) : (
        <Routes>

          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LandingPageLogin />} />

          <Route exact path="/" element={<PrivateRoute />} >
            <Route exact path="/home" element={<HomePage />} />
          </Route>

        </Routes>
      )}
    </div>
  );
}

export default App;
