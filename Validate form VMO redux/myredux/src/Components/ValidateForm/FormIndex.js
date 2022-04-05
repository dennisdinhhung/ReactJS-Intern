import React from 'react'
import './FormIndex.css'
import FormUsers from './FormUsers'
import { useDispatch, useSelector } from 'react-redux'
import { set_users, add_users } from '../Store/ActionTypes'

function FormIndex() {
    const formUsers = useSelector(state => state.Form.user)
    const dispatch = useDispatch()
    const { name, address, gmail, gender } = formUsers

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            id: Math.floor(Math.random() * 1000),
            name: formUsers.name,
            gmail: formUsers.gmail,
            address: formUsers.address,
            gender: formUsers.gender,
            isEdit: formUsers.isEdit,
        }
        dispatch(add_users(newUser))
    }
    return (
        <div>
            <form id='formContainer' onSubmit={handleSubmit}>
                <div className='nameInput'>
                    <h4>Name:</h4>
                    <input
                        type='text'
                        name='name'
                        placeholder='...'
                        value={name}
                        onChange={(e) => dispatch(
                            set_users({
                                ...formUsers,
                                name: e.target.value
                            })
                        )}
                    />
                </div>
                <div className='addressInput'>
                    <h4>Address:</h4>
                    <input
                        type='text'
                        name='address'
                        placeholder='...'
                        value={address}
                        onChange={(e) => dispatch(
                            set_users({
                                ...formUsers,
                                address: e.target.value
                            })
                        )}
                    />
                </div>
                <div className='gamilInput'>
                    <h4>Gamil:</h4>
                    <input
                        type='email'
                        placeholder='...'
                        name='gmail'
                        value={gmail}
                        onChange={(e) => dispatch(
                            set_users({
                                ...formUsers,
                                gmail: e.target.value
                            })
                        )}
                    />
                </div>
                <div className='genderInput'>
                    <span>Male</span>
                    <input
                        type='checkbox'
                        name='gender'
                        value='male'
                        checked={gender === 'male'}
                        onChange={(e) => dispatch(
                            set_users({
                                ...formUsers,
                                gender: e.target.value
                            })
                        )}
                    />
                    <span>Female</span>
                    <input
                        type='checkbox'
                        name='gender'
                        value='female'
                        checked={gender === 'female'}
                        onChange={(e) => dispatch(
                            set_users({
                                ...formUsers,
                                gender: e.target.value
                            })
                        )}
                    />
                </div>
                <div>
                    <button onSubmit={handleSubmit}>
                        {formUsers.isEdit === false ? "Submit" : "Update"}
                    </button>
                </div>
            </form>
            <FormUsers />
        </div>
    )
}

export default FormIndex