import React from "react";
import Home from "./components/Home/Home";
import Signin from "./components/signin/Signin";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Home/Sidebar";
import ProductManagement from "./components/ProductManagement/ProductManagement";
const App = () => {
  return (
    
    <div className="App">
    
    {/* <Signin/> */}
    <Sidebar/>
    {/* <Logo/> */}
    {/* <Home/> */}
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="sign" element={<Signin />} />
      <Route path="ProductManagement" element={<ProductManagement />} />
    </Routes>
  </div>
  );
};

export default App;
