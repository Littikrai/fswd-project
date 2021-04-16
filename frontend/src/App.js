import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import Product from "./page/Products";
import Navbar from "./component/Nevbar";
import CustomTheme from "./component/Theme";
import SignUp from "./page/SignUp";
import ProductDetail from "./page/ProductDetail";
import Promotion from "./page/Promotions";

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
          <Route exact path="/promotion">
            <Promotion />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/product/1">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </CustomTheme>
  );
}

export default App;
