import React, { useEffect, useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { BiEnvelopeOpen, BiLockAlt } from "react-icons/bi";
import axios from "axios";
const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // login functionality
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/");
    }
  }, [navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate("/");
    try {
      const config = {
        "Content-type": "application/json",
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/login",
        { email, password },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.massage);
      setLoading(false);
    }
  };

  return (
    <body>
      <div class="left-signin">
        <img id="img1" src="/icons/loginImage2.jpg" alt="loginImage" />
      </div>
      <div className="right-signin">
        <div id="loginTop">
          <label id="Wellcome">Welcome to</label>
          <p id="loginNameplate">
            <img id="img2" src="/icons/template.jpg" alt="LoginImage" />
          </p>
        </div>
        <div id="completeForm">
          <form>
            {error && <errorComponent />}
            {loading && <loadingComponent />}
            <div className="loginInput">
              <BiEnvelopeOpen />
              <input
                type="email"
                id="InputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <BiLockAlt />
              <input
                className="loginInput"
                type="password"
                id="InputPassword1"
                placeholder="Passwors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                id="loginSubmitButton"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                SIGN IN
              </button>
            </div>
            <div id="ForgotPassword">Forgot Password ?</div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Signin;
