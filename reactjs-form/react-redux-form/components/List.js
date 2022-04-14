import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData,updateData,setContactInput } from "../Stores/actions";
const List = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);

  const {contact, contacts} = state;
    const handleEdit = (contact) => {
        dispatch(setContactInput(contact));
      };
      const handleDelete = (id) => {
        dispatch(deleteData(id));
      };
  return (
    <div>
         <div className="list">
          <h3>List</h3>
          <table className="grid-info" id="grid-info">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>City</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Date</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {contacts.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.name}</td>
                                <td>{contact.phoneNumber}</td>
                                <td>{contact.city}</td>
                                <td>{contact.gender}</td>
                                <td>{contact.email}</td>
                                <td>{contact.date}</td>
                                <td>{contact.checkbox}</td>
                                <td>
                                    <button onClick={() => handleEdit(contact)}>
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(contact.id)}>
                                        Del
                                    </button>
                                </td>
                            </tr>
                        ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default List