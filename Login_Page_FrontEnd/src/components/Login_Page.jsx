import { useState } from "react";

const Login_Page = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const handleChangeSignin = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };
  
  const handleSubmitSignin = (e) => {
    e.preventDefault();
    if (loginUser.email !== "" && loginUser.password !== "") {
      const LoginAPI = `http://localhost:3000/create/Userdata`;
      fetch(`${LoginAPI}`, {
        method: 'POST',
        body: JSON.stringify(loginUser),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
      console.log(`Successfully Save data`);
    }).catch((err) => {
      console.log(`Data Not Saved ! Error:- 💥`, err);
    })
  }}
  return (
    <div className="Login_Box">
      <div className="heading">
        <h1>LOGIN</h1>
      </div>
      <div className="email_Box">
        <div className="forEmail">
          <label htmlFor="email">Email address</label>
        </div>
        <div className="forspace">
          <input
            type="email"
            name="email"
            id="email"
            className="inputBox"
            required
            autoComplete="off"
            onChange={handleChangeSignin}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="Password">Password</label>
        </div>
        <div className="forspace">
          <input
            type="password"
            name="password"
            id="password"
            className="inputBox"
            required
            autoComplete="off"
            onChange={handleChangeSignin}
          />
        </div>
      </div>

      <div className="otherprop">
        <div>
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <div>
          <a href="#">Forgot Password ? </a>
        </div>
      </div>

      <div className="Loginbtn">
        <button className="LoginCLickBTN" onClick={handleSubmitSignin}>Login</button>
      </div>

      <div className="centerpara">
        <p>Not registered? Click here to join</p>
      </div>
    </div>
  );
};

export default Login_Page;
