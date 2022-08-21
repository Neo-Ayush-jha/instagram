import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import './App.css';
import Body from './Components/Body.jsx';
import Login from './Components/Login.jsx';
import Login2 from './Components/Login2.jsx';
import SingUp from './Components/SingUp.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AuthUser = () => {
  return (
    <Routes>
      <Route path="/home" element={<Body />} />
      <Route path="/" element={<Body />} />
    </Routes>
  );
}

const  UnAuthUser= () => {
  return (
    <Routes>
      <Route path="/login" element={<Login2 />} />
      <Route path="/SingUp" element={<SingUp />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

function App() {
  const [user, setUser] = useState('');

  useState(() => {
    firebase.auth().onAuthStateChanged((userExist) => {
      if (userExist) {
        setUser(userExist);
        console.log(userExist);
      }
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        {
          user ? <AuthUser /> : <UnAuthUser />
        }
      </BrowserRouter>
    </>
  );
}

export default App;


{/* <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login2" element={ <Login2/> }/>
          <Route path="/SingUp" element={ <SingUp/> }/>
          <Route path="/home" element={ <Body/> }/>
      </Routes> */}
