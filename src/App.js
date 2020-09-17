import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import MealsScreen from "./screens/MealsScreen";
import ForgotPass from "./screens/ForgotPass";
import ChangePass from "./screens/ChangePass";
import Admin from "./screens/Admin";

function App() {
<<<<<<< HEAD

  return (

=======
  return (
>>>>>>> 9c422ad60c0a3a50c7ffb69185e03117a18fd3fe
    <div className="container">
      <Switch>
        <Route exact path="/" component={MealsScreen}></Route>
        <Route path="/login" component={LoginScreen}></Route>
        <Route path="/forgot-pass" component={ForgotPass}></Route>
        <Route path="/change-pass" component={ChangePass}></Route>
        <Route path="/admin" component={Admin}></Route>
      </Switch>
    </div>
  );
}

export default App;
