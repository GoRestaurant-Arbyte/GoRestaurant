import React from 'react';
import ModalCreatePlate from "./modals/createPlates"
import './App.css';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={PlatesScreen}></Route>
        <Route path="/login" component={LoginScreen}></Route>
        <Route path="/forgot-password" component={ForgotePasswordScreen}></Route>
      </Switch>
      <ModalCreatePlate />
    </div>
  );
}

export default App;
