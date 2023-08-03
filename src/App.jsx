import "./App.css";
import Chart from "./components/Chart/Chart";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Chart></Chart>
    </div>
  );
}

export default App;
