import logo from './logo.svg';
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import LineBarAreaComposedChart from './components/MyLineChart/LineBarAreaComposedChart/LineBarAreaComposedChart';

function App() {
  return (
    <div className="App">
      <MyLineChart></MyLineChart>
      <LineBarAreaComposedChart></LineBarAreaComposedChart>
    </div>
  );
}

export default App;
