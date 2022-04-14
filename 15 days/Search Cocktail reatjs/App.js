import './App.css';
import IndexCocktail from './Component/MainContent/IndexCocktail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DetailCocktail from './Component/MainContent/DetailCocktail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IndexCocktail />} ></Route>
        <Route path='/:id' element={<DetailCocktail />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
