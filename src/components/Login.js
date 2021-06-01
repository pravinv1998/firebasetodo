import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`email="${email}" password="${password}"`);
    setValue({
      email: email,
      password: password,
    });
  };

  return (
    <div className="center container" style={{ maxWidth: "500px" }}>
      <h3>Login</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-field ">
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn blue">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
