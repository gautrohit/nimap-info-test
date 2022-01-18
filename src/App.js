import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";
import "../src/scss/main.scss";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Task from "./components/task/Task";
import User from "./components/user/User";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/task" element={<Task />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
