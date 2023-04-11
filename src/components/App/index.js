import "../../_styles/App.css";
import { useSelector } from "react-redux";
import Btn from "./Btn";
function App() {
  const count = useSelector((state) => state.counter);
  return (
    <div className="App">
      <header className="App-header">
        Standard React Project Structure {count}
        <Btn />
      </header>
    </div>
  );
}

export default App;
