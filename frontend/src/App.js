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
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import Payment from "./page/Payment";
import Profile from "./page/Profile";
import Order from "./page/Order";
import OrderDetail from "./page/OrderDetail";
import Admin from "./page/Admin";
import AdminProduct from "./page/AdminProduct";
import CreateProduct from "./page/CreateProduct";
import AdminPromotion from "./page/AdminPromotion";
import CreatePromotion from "./page/CreatePromotion";
import UploadForm from "./component/UploadForm";

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
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
          <Route exact path="/promotion">
            <Promotion />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route exact path="/customer">
            <Profile />
          </Route>
          <Route exact path="/customer/order">
            <Order />
          </Route>
          <Route exact path="/customer/order/:id">
            <OrderDetail />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/admin/product">
            <AdminProduct />
          </Route>
          <Route exact path="/admin/product/create">
            <CreateProduct />
          </Route>
          <Route exact path="/admin/promotion">
            <AdminPromotion />
          </Route>
          <Route exact path="/admin/promotion/create">
            <CreatePromotion />
          </Route>
          <Route exact path="/file">
            <UploadForm />
          </Route>
        </Switch>
      </div>
    </CustomTheme>
  );
}

export default App;
