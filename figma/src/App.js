import './App.css';
import Login from './components/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <ToastContainer position='top-center' />
      <Login />
    </div>
  );
}

export default App;
