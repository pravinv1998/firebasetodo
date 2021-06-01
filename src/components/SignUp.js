import React, { useState } from "react";

const SignUp = () => {
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
      <h3>SignUp</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="input-field ">
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

      {/* <div>
        <h4>Email: {value.email} </h4>
        <h4>Password: {value.password} </h4>
      </div> */}
    </div>
  );
};

export default SignUp;
