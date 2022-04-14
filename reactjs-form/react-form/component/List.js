import React from 'react'

const List = ({listContact, parentOnEditClick, parentOnDelClick}) => {
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
            {listContact.map((row, index) => (
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.phoneNumber}</td>
                                <td>{row.city}</td>
                                <td>{row.gender}</td>
                                <td>{row.email}</td>
                                <td>{row.date}</td>
                                <td>{row.checkbox}</td>
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

export default List