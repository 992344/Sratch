import React from "react";
import ImageComponent from "./ImageComponent";
import "./styles/mainpage.css";
const Main = () => {
  return (
    <div className="main-page">
      <p >Welcome Admin</p>
      <ImageComponent dWidth = {500}dHeight ={85}/>
    </div>
  );
};

export default Main;
