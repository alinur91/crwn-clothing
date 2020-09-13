import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route,Link } from "react-router-dom";


const HatsPage = (props) =>{
   console.log(props)
    return (
      <div>
        <button onClick={()=> props.history.push('/topics')} >Topics</button>
        <h1>Hats Page</h1>;
      </div>
    );
}

function App(props) {
  console.log(props)
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
