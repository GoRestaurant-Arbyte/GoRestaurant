import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import MealsScreen from "./screens/MealsScreen";
import ChangePass from "./screens/ChangePass";


function App() {

  return (

    <div className="container">
      <Switch>
        <Route exact path="/" component={MealsScreen}></Route>
        <Route path="/login" component={LoginScreen}></Route>
        <Route path="/change-pass" component={ChangePass}></Route>
        
      </Switch>
    </div>
  );
}

export default App;
