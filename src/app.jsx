import React from 'react';
import Header from './Components/Header/Header';
import UserSettings from './Components/SettingsForm/SettingsForm';
import ToDo from './Components/ToDo';
import Auth from './Components/Auth/Auth';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () =>{
    return (
    <Router>
      <Header/>
      {/* <Auth capability="read">I can read</Auth>
      <Auth capability="create">I can create</Auth>
      <Auth capability="update">I can update</Auth>
      <Auth capability="delete">I can delete</Auth> */}
      <Routes>
        <Route exact path="/" element={<ToDo/>}/>
        <Route exact path="/UserSettings" element={<UserSettings/>}/>
      </Routes>
    </Router>
    );
  }
export default App;