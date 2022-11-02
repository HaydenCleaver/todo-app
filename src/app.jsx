import React from 'react';

import ToDo from './Components/ToDo';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ToDo/>}/>
        {/* <Route exact path="/UserSettings" element={<UserSettings/>}/> */}
      </Routes>
    </Router>
    );
  }
}
