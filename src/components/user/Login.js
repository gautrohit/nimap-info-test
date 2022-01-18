import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    const response = await axios.post(
      "http://blogservice.herokuapp.com/api/login",
      user
    );
    setUser(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
  };

  if (user) {
    return (
      <div>
        {user.name} is loggged in
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }
  return (
    <div>
      <div class="col-4">
        <form class="px-4 py-3" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleDropdownFormEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email@example.com"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleDropdownFormPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button className="btn btn-warning">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
