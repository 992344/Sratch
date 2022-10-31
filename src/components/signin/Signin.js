import React from 'react'
import loginImage2 from './image/loginImage2.jpg'
import loginImage1 from './image/loginImage1.png'
import "./Signin.css";
import { BiEnvelopeOpen, BiLockAlt } from "react-icons/bi";

const Signin = () => {
  return (
    <body>
    <div class="left">
    <img id="img1" src={loginImage2} />
    </div>
    <div class="right">
   
        <div id="loginTop">
          <label id="Wellcome" >Wellcome to</label>
          <p id="loginNameplate">
            <img src={loginImage1} />
          </p>
        </div>
        <div id="completeForm">
          <form>
            <div class="loginInput">
              <BiEnvelopeOpen />
              <input
                type="email"
                id="InputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <BiLockAlt />
              <input
                className="loginInput"
                type="password"
                id="InputPassword1"
                placeholder="Passwors"
              />
            </div>

            <button
              type="submit"
              id="loginSubmitButton"
              class="btn btn-primary"
            >
              SIGN IN
            </button>
            <div id="ForgotPassword"
            ><p>Forgot Password ?</p></div>
          </form>
        </div>

    </div>
    </body>
  )
}

export default Signin
