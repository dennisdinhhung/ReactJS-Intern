import './App.css';
import FormDummy from './components/form-dummy';
import Table from './components/Table';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  //redux way to provide the state for its components
  const state =  useSelector((state) => state.form)
  console.log(state, 1)
  const [errorReset, setErrorReset] = useState({})

  const errorResetFunc = () =>{
    setErrorReset({})
  }
  
  return (
    <div className="App">
      <div>
        This is a test
      </div>
      <FormDummy state={state} errorReset={errorReset}/>
      <Table state={state} errorResetFunc={errorResetFunc}/>
    </div>
  );
}

export default App;
