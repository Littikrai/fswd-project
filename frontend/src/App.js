import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import Product from "./page/Products";
import Navbar from "./component/Nevbar";
import CustomTheme from "./component/Theme";
import Button from "@material-ui/core/Button";
import SignUp from "./page/SignUp";
import ProductDetail from "./page/ProductDetail";

function App() {
  return (
    <CustomTheme>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/product/de">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </CustomTheme>
  );
}

export default App;
