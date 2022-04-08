import "./App.css";
import Container from "./components/Container";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Container />
      </Router>
    </div>
  );
}

export default App;
