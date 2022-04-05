import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { delete_users, set_users } from '../Store/ActionTypes'

function FormUsers() {
    const userList = useSelector(state => state.Form.users)
    const dispatch = useDispatch()

    const handleDelete = (user) => {
        dispatch(delete_users(user))
    }

    const handleUpdate = (user) => {
        dispatch(set_users({
            ...user,
            isEdit: !user.isEdit
        }))
        console.log(dispatch(set_users({
            ...user,
            isEdit: !user.isEdit
        })));
    }
    return (
        <div>
            <TablePane>
                <thead>
                    <tr>
                        <TableTd>STT</TableTd>
                        <TableTd>Name</TableTd>
                        <TableTd>Address</TableTd>
                        <TableTd>Gmail</TableTd>
                        <TableTd>Gender</TableTd>
                        <TableTd>Actions</TableTd>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList && userList.length > 0 && userList.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <TableTd>{index}</TableTd>
                                    <TableTd>{user.name}</TableTd>
                                    <TableTd>{user.address}</TableTd>
                                    <TableTd>{user.gmail}</TableTd>
                                    <TableTd>{user.gender}</TableTd>
                                    <TableTd>
                                        <button onClick={() => handleDelete(user)}>DELETE</button>
                                        <button onClick={() => handleUpdate(user)}>EDIT</button>
                                    </TableTd>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </TablePane>
        </div>
    )
}

export default FormUsers

const TablePane = styled.table`
    border-collapse: collapse;
    width:500px;
    height:auto;
    margin-top:20px;
    text-algin:center;
`
const TableTd = styled.td`
    border: 1px solid black;
    text-algin:center;
`