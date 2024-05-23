import "./App.css";
import MyRGBPanel from "./components/rgb-panel/MyRGBPanel";
import MySlider from "./components/rgb-panel/MySlider";
import MyCalculator from "./components/calculator/MyCalculator";

function App() {
  return (
    <div className="App">
      <h1>MySlider</h1>
      <MySlider />
      <h1>MyRGBPanel</h1>
      <MyRGBPanel />
      <h1>MyCalculator</h1>
      <MyCalculator />
    </div>
  );
}

export default App;
