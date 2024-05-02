import './App.css';
import MySlider from './MySlider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React! 2024.5.2</h1>
        <h2>React第一個元件</h2>
        <MySlider color="RED"/>
        <MySlider color="GREEN"/>
        <MySlider color="BLUE"/>
      </header>
    </div>
  );
}

export default App;
