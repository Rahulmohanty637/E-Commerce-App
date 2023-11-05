import "./App.css";
import Navigation from "./customer/component/Navigation/Navigation";
import Homepage from "./customer/Pages/HomePage/Homepage";
import Footer from "./customer/component/Footer/Footer";

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
