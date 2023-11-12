import "./App.css";

import Homepage from "./customer/Pages/HomePage/Homepage";
import Footer from "./customer/component/Footer/Footer";
import Navigation from "./customer/component/Navigation/Navigation";
import Product from "./customer/component/Product/Product";
import ProductDetails from "./customer/component/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="">
      <Navigation></Navigation>
      <div >
        {/* <Homepage></Homepage> */}
        {/* <Product></Product> */}
        <ProductDetails></ProductDetails>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
