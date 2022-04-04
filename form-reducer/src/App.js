import { useState } from 'react';
import './App.css';
import FormDummy from './components/form-dummy';
import Table from './components/Table';

function App() {
  const [errorReset, setErrorReset] = useState({})

  const errorResetFunc = () =>{
    setErrorReset({})
  }
  
  return (
    <div className="App">
      <div>
        This is a test
      </div>
      <FormDummy errorReset={errorReset}/>
      <Table errorResetFunc={errorResetFunc}/>
    </div>
  );
}

export default App;
