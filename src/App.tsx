import "./App.css";
import Dashboard from "./pages/Dashboard";

const ifLogin = false;

function App() {
  return <div className="App">{ifLogin ? <Dashboard /> : null}</div>;
}

export default App;
