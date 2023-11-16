import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../customer/Pages/HomePage/Homepage";
import Cart from "../customer/component/Cart/Cart";
import Navigation from "../customer/component/Navigation/Navigation";
import Product from "../customer/component/Product/Product";
import Footer from "../customer/component/Footer/Footer";
import ProductDetails from "../customer/component/ProductDetails/ProductDetails";
import Checkout from "../customer/component/Checkout/Checkout";
import Order from "../customer/component/Order/Order";
import OrderDetails from "../customer/component/Order/OrderDetails";


const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Navigation></Navigation>
      </div>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/:sectionOne/:sectionTwo/:sectionThree" element={<Product></Product>}></Route>
          <Route path="/product/:productId" element={<ProductDetails></ProductDetails>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="/account/order" element={<Order></Order>}></Route>
          <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        </Routes>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CustomerRouter;
