import "./App.css";

import Homepage from "./customer/Pages/HomePage/Homepage";
import Cart from "./customer/component/Cart/Cart";
import Footer from "./customer/component/Footer/Footer";
import Navigation from "./customer/component/Navigation/Navigation";
import Product from "./customer/component/Product/Product";
import ProductDetails from "./customer/component/ProductDetails/ProductDetails";
import Checkout from "./customer/component/Checkout/Checkout";
import Order from "./customer/component/Order/Order";
import OrderDetails from "./customer/component/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouter from "./Routers/CustomerRouter";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouter></CustomerRouter>}></Route>
      </Routes>

      <div>
        {/* <Homepage></Homepage> */}
        {/* <Product></Product> */}
        {/* <ProductDetails></ProductDetails> */}
        {/* <Cart></Cart> */}
        {/* <Checkout></Checkout> */}
        {/* <Order></Order> */}
        {/* <OrderDetails></OrderDetails> */}
      </div>
    </div>
  );
}

export default App;
