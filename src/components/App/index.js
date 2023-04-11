import "./App.css";
import { useSelector } from "react-redux";
function App() {
  const count = useSelector((state) => state.counter);
  return (
    <div className="App">
      <header className="App-header">
        Standard React Project Structure {count}
      </header>
    </div>
  );
}

export default App;
