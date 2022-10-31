import React from "react";
import Home from "./components/Home/Home";
import Signin from "./components/signin/Signin";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Home/Sidebar";
import ProductManagement from "./components/ProductManagement/ProductManagement";
import './App.css'
import Main from "./components/Main";
const App = () => {
  return (
    
    <div className="App">
    
    {/* <Signin/> */}
    
    {/* <Logo/> */}
    {/* <Home/> */}
    <div className="main-area">

     <div className="left-side">
      <Home/>
      <Sidebar/>
     </div>
    <div className="right-side">
    <Routes>
  
      {/* keep all the routes here */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<Main />} />
    </Routes>
    </div>
    </div>
  </div>
  );
};

export default App;
