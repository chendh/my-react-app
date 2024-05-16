import './App.css';
import MyRGBPanel from './components/MyRGBPanel';
import MyCalculator from './components/MyCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React! 2024.5.16</h1>
        <h2>MyRGBPanel</h2>
        <MyRGBPanel />
        <h2>MyCalculator</h2>
        <MyCalculator />
      </header>
    </div>
  );
}

export default App;
