import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar fixed-top ">
      <div class="container-fluid" style={{ height: 50, alignItems: "center"  }}>
      
          <Link class="navbar-brand" to='' >
<img src="/icons/templet1.png" alt="" style={{ width: 300, height:45 }}  />


           {/* <img src={process.env.PUBLIC_URL+"icons/navbarSymboll.png"} style={{ width: 40, height: 40, paddingBottom:9 }} />
paddingLeft:9 ,paddingBottom:9
           <img src={process.env.PUBLIC_URL+"icons/navbarLogo.png"} style={{ width: 200, height:40, paddingLeft:9 ,paddingBottom:9}} /> */}

          </Link>
          <Link to='signin'>
          <span
            className="signinIcon"
            style={{ textDecoration: "none" }}
          >
          
          <img src={process.env.PUBLIC_URL+"icons/loginImage2.png"} style={{width:33 ,height:35, justifyContent:'center',paddingBottom:5}} />
 
          
          </span>
          </Link>
        </div>
    </nav>
  );
};

export default Navbar;
      
