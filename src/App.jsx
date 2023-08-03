import "./App.css";
import Chart from "./components/Chart/Chart";
import Navbar from "./components/Navbar/Navbar";
import PhoneBar from "./components/PhoneBar/PhoneBar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Chart></Chart>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
