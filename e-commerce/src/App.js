import "./App.css";

import Homepage from "./customer/Pages/HomePage/Homepage";
import Footer from "./customer/component/Footer/Footer";
import Navigation from "./customer/component/Navigation/Navigation";

function App() {
  return (
    <div className="">
      <Navigation></Navigation>
      <div >
        <Homepage></Homepage>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
