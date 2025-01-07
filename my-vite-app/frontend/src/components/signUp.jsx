import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

var SignUp = () => {
  var [userName, setUserName] = useState("");
  var [password, setPassword] = useState("");
  var navigate = useNavigate();

  var signUp = async (e) => {
    console.log("inside");
    e.preventDefault();
    var req = await axios.post('https://mern-project-2-ptoy.onrender.com/signUp', {
        userName: userName,
        password: password,
      })
      if(req.data="data added"){
        navigate("/login")
      }
  };
  return (
    <div>
      <div className="module">
        <h1>Sign Up Page</h1>
        <form onSubmit={signUp}>

          <label htmlFor="userName">User Name : </label>
          <input
            type="text"
            name="userName"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />{" "}
          <br /> <br />
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
          <br /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
