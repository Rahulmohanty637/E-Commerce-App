import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/component/Navigation";
import Homepage from "./customer/Pages/HomePage/Homepage";

function App() {
  return (
    <div className="">
      <Navigation></Navigation>
      <div>
        <Homepage></Homepage>
      </div>
    </div>
  );
}

export default App;
