import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Company from "./pages/Company";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job"
import NotFound from "./pages/NotFound";
import authService from "./Services/authService";

function App() {
  const [current, setCurrent]=useState(undefined);
  useEffect(()=>{
    const comp=authService.getCurrentCompany();
    if(comp){
      setCurrent(comp);
    }
  },[])
  if(!current){
    return(
      <BrowserRouter>
        <Navbar/>
        <Home/>
      </BrowserRouter>
    )
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/company/" component={Company} />
        <Route exact path="/jobs/" component={Jobs} />
        <Route exact path="/job/:id" component={Job} />
        <Route path="" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;