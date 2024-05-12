import React, { useState } from "react";
import "./Login.scss";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = ({count , setCount}) => {
  const [view, setView] = useState(0);
  const [password, setPassword] = useState(1);
  return (
    <div className={count ? "Login active" : "Login"}>
      <div onClick={()=>{setCount(!count)}} className="exit"></div>
      <div className="p-absolut">
        <div className="buttons">
          <p>
            <span
              onClick={() => {
                setView(!view);
              }}
              className={view ? "" : "active"}
            >
              Login
            </span>{" "}
            |{" "}
            <span
              onClick={() => {
                setView(!view);
              }}
              className={view ? "active" : ""}
            >
              Register
            </span>
          </p>
        </div>
        <div className={view ? "Logina" : "Logina active"} >
          <p>Enter your username and password to login.</p>
          <input type="email" placeholder="Enter your email address" />
          <span className="password">
            <p onClick={()=>{setPassword(!password)}} className={password ? "" : "active"}>
              <FaRegEye />
            </p>
            <p onClick={()=>{setPassword(!password)}} className={password ? "active" : ""}>
              <FaRegEyeSlash />
            </p>
            <input type={password ? "password" : "text"} placeholder="Password" />
          </span>
          <a href="">Forgot Password?</a>
          <button>Login</button>
          <span>
            <hr />
            <p>Or login with</p>
          </span>
          <br />
          <button>
              <BsGoogle />{" "}Login with Google
          </button>
          <button>
              <FaFacebook />{" "}Login with Facebook
          </button>
        </div>
        <div className={view ? "Register active" : "Register"} >
          <p>Enter your email and password to register.</p>
          <input type="text" placeholder="User Name" />
          <input type="email" name="" id="" placeholder="Enter your email address" />
          <span className="password">
            <p onClick={()=>{setPassword(!password)}} className={password ? "" : "active"}>
              <FaRegEye />
            </p>
            <p onClick={()=>{setPassword(!password)}} className={password ? "active" : ""}>
              <FaRegEyeSlash />
            </p>
            <input type={password ? "password" : "text"} placeholder="Password" />
          </span>
          <span className="password">
            <input type={password ? "password" : "text"} placeholder="Confirm Password" />
          </span>
          <button>Register</button>
          <span className="or">
            <hr />
            <p>Or login with</p>
          </span>
          <br />
          <button>
              <BsGoogle />{" "}Login with Google
          </button>
          <button>
              <FaFacebook />{" "}Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
