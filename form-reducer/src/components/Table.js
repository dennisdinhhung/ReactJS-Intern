import React, { useContext } from 'react'
import Context from '../context/context'
import { delInfo, editInfo } from '../reducer/actions';

function Table() {
    const [state, dispatch] = useContext(Context);
    const {users, user} = state;

    const handleEditClick = (currentUser) => {
        dispatch(
            editInfo(currentUser)
        )
    }

    const handleDelClick = (currentUser) => {
        dispatch(
            delInfo(currentUser)
        )
    }
  return (
    <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>DoB</th>
                            <th>Preference</th>
                            <th>Description</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                        
                    <tbody>
                    {
                    users.map((user, index) => (
                            <tr key={index}>
                                <td>{++index}</td>
                                <td>{user.user_name}</td>
                                <td>{user.phone_no}</td>
                                <td>{user.address}</td>
                                <td>{user.radio}</td>
                                <td>{user.email}</td>
                                <td>{user.dob}</td>
                                <td>{user.checkbox.join(', ')}</td>
                                <td>{user.desc}</td>
                                <td>
                                    <button onClick=
                                        {
                                            () => handleEditClick(user)
                                        }
                                        >
                                        Edit
                                    </button>
                                    <button onClick={
                                        () => handleDelClick(user)
                                        }>
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

export default Table