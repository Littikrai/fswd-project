import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Product from "./page/Products";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Product">Product</Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Product">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
