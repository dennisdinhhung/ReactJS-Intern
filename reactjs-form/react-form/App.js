import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import List from './component/List';
import {useState} from 'react'
function App() {
  const [listContact, setListContact] = useState(localStorage.getItem('row') ? JSON.parse(localStorage.getItem('row')) : []);

  const [rowToEdit, setRowToEdit] = useState({
    id: '',
    name: '',
    phoneNumber: '',
    city: '',
    gender: 'male',
    email: '',
    date: '',
    checkbox: [],
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
     const updateInfoList = [...listContact, newInfo];

     //put item into LocalStorage
     localStorage.setItem('row', JSON.stringify(updateInfoList));

     //useState to update the infoList
     setListContact(updateInfoList);
 };
 const getRowID = (id) => {
  for (let i = 0; i < listContact.length; i++){
    if(listContact[i].id === id) return listContact[i]; //return the listInfo object
  }
  return null;
}

const handleParentUpdate = (inputInfo) => {
  //TODO: find the id from
  const newList = [...listContact];
  const rowToUpdate = getRowID(inputInfo.id);
  const index = listContact.indexOf(rowToUpdate);
  
  //assign the inputInfo's data into newList's row of 'index'
  newList[index] = inputInfo;
  
  //store the new list into the LocalStorage
  localStorage.setItem('row', JSON.stringify(newList));

  // update the UI with useState's set
  setListContact(newList);
};

const handleParentDel = (row) => {
  const index = listContact.indexOf(row);
  const newList = [...listContact];

  newList.splice(index, 1);

  localStorage.setItem('row', JSON.stringify(newList));
  setListContact(newList);
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
      <List
        listContact={listContact}
        parentOnEditClick = {handleParentEdit}
        parentOnDelClick = {handleParentDel}
      />
    </div>
  );
}

export default App;
