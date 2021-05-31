import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import Todo from "./components/Todo";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Todo />
      </Route>
    </BrowserRouter>
  );
}

export default App;
