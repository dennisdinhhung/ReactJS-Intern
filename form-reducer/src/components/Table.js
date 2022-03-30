import { React, useState } from 'react';
import Form from './Form';

function Table({listInfo, parentOnEditClick, parentOnDelClick}) {
    // const [table, setTable] = useState();

    const handleEditClick = (row) => {
        if (parentOnEditClick){
            parentOnEditClick(row);
        }
    }

    const handleDelClick = (row) => {
        if (parentOnDelClick){
            parentOnDelClick(row);
        }
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
                    {listInfo.map((row, index) => (
                            <tr key={index}>
                                <td>{++index}</td>
                                <td>{row.user_name}</td>
                                <td>{row.phone_no}</td>
                                <td>{row.address}</td>
                                <td>{row.radio}</td>
                                <td>{row.email}</td>
                                <td>{row.dob}</td>
                                <td>{row.checkbox.join(', ')}</td>
                                <td>{row.desc}</td>
                                <td>
                                    <button onClick={() => handleEditClick(row)}>
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelClick(row)}>
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