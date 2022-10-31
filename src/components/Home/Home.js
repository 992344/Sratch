import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <nav class="navbar fixed-top ">
      <div class="container-fluid" style={{ height: 50, alignItems: "center"  }}>
      
          <Link class="navbar-brand" to='ProductManagement' >
           <img src={process.env.PUBLIC_URL+"icons/navbarSymboll.png"} style={{ width: 40, height: 40, paddingBottom:9 }} />

           <img src={process.env.PUBLIC_URL+"icons/navbarLogo.png"} style={{ width: 280, height: 35, paddingLeft:9 ,paddingBottom:9}} />

          </Link>
          <span
            className="signinIcon"
            style={{ textDecoration: "none" }}
          >
          
          <img src={process.env.PUBLIC_URL+"icons/loginImage2.png"} style={{width:35 ,height:35, justifyContent:'center',paddingBottom:5}} />
 
          
          </span>
        </div>
    </nav>
  );
};

export default Home;
      
