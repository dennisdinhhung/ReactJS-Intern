import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table'



function App() {

  // get the localStorage's list of info or create an empty list
  const [listInfo, setListInfo] = useState(localStorage.getItem('row') ? JSON.parse(localStorage.getItem('row')) : []);

  const [rowToEdit, setRowToEdit] = useState({
    id: '',
    user_name: '',
    phone_no: '',
    address: '',
    radio: 'male',
    email: '',
    dob: '',
    checkbox: [],
    desc:''
  });


  const handleParentSubmit = (inputInfo) => {
      // create random id
      let inputId = Math.floor(Math.random()*10000);
      
      //create a new row with an id
      const newInfo = {
          ...inputInfo,
          id: inputId
      };

      //put new row into a list
      const updateInfoList = [...listInfo, newInfo];

      //put item into LocalStorage
      localStorage.setItem('row', JSON.stringify(updateInfoList));

      //useState to update the infoList
      setListInfo(updateInfoList);
  };

  const getRowID = (id) => {
    for (let i = 0; i < listInfo.length; i++){
      if(listInfo[i].id === id) return listInfo[i]; //return the listInfo object
    }
    return null;
  }

  const handleParentUpdate = (inputInfo) => {
    const newList = [...listInfo];
    const rowToUpdate = getRowID(inputInfo.id);
    const index = listInfo.indexOf(rowToUpdate);
    
    //assign the inputInfo's data into newList's row of 'index'
    newList[index] = inputInfo;
    
    //store the new list into the LocalStorage
    localStorage.setItem('row', JSON.stringify(newList));

    // update the UI with useState's set
    setListInfo(newList);
  };

  const handleParentDel = (row) => {
    const index = listInfo.indexOf(row);
    const newList = [...listInfo];

    newList.splice(index, 1);

    localStorage.setItem('row', JSON.stringify(newList));
    setListInfo(newList);
  }

  const handleParentEdit = (row) => {
    setRowToEdit(row);
  }
  
  return (
    <div className="App">
      <Form 
        parentOnSubmit={handleParentSubmit}
        parentOnUpdate={handleParentUpdate}
        rowToEdit={rowToEdit}/>
      <Table 
        listInfo={listInfo}
        parentOnEditClick = {handleParentEdit}
        parentOnDelClick = {handleParentDel}/>
    </div>
  );
}

export default App;
