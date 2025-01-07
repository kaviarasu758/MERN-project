import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './css/logOut.css'


var Login = () => {
  var navigate = useNavigate()
  var [userName, setUserName] = useState("");
  var [password, setPassword] = useState("");

  var handleSubmit = (async(e) => {
    console.log("inside")
    e.preventDefault()

      const res= await axios
      .post("https://placement-training-sem5-2.onrender.com/login", { userName, password })
      console.log(res.data==userName)
      localStorage.setItem("user_name",res.data)
   
      if(res.data=="notFound"){
        alert("wroing username or password")
        navigate("/signup")
      }
      else if(res.data){
        alert("right password and username")
        navigate("/home")
      }
  });
  return (
    <div>
      <div className="module">
        <h2>Login Page</h2>
        <form >
          <label htmlFor="userName">User Name : </label>
          <input
            type="text"
            name="userName"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />{" "}
          <br /> <br />
          <label htmlFor="text">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
          <br /> <br />
          <button onClick={handleSubmit}>Login</button>
          <button >Sign Up</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
