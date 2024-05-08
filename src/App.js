import "./App.css";
import MyRGBPanel from "./components/MyRGBPanel";
import MySlider from "./components/MySlider";

function App() {
  return (
    <div className="App">
      <h1>MySlider</h1>
      <MySlider />
      <h1>MyRGBPanel</h1>
      <MyRGBPanel />
    </div>
  );
}

export default App;
