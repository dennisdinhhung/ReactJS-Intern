import React, { useContext, useReducer, useState } from 'react'
import reducer, {initalState} from '../reducer/reducer'
import {setStateInfo} from '../reducer/actions'
import Context from '../context/context'

function FormDummy() {

    // using useContext to call useReducer

    const [info, dispatch] = useContext(Context);
    
    const {user} = info
    return (
        // <div className='div-form'>
        //     <div>
        //         <form>
        //             <input 
        //                 value={user.user_name}
        //                 onChange={(e) => {
        //                     dispatch(
        //                         setStateInfo({
        //                             ...user,
        //                             user_name: e.target.value
        //                         }))
        //                 }}/>
        //         </form>
        //     </div>
        // </div>

        <div className="div-form"> 
            <form 
                className="form" 
                id="form" 
                // onSubmit={handleSubmit}
                >
                <div className='div-input'>
                    <div className='label'>Name<span>*</span></div>
                    <input 
                    value={user.user_name}
                    onChange={(e) => {
                        dispatch(
                            setStateInfo({
                                ...user, user_name: e.target.value
                            })
                        )
                    }}
                    className='text-input input-name' 
                    id='input-name' 
                    type='text' 
                    placeholder='Enter your name' 
                    autoComplete='off'/>
                    <div className='validate-msg'>{/* error_msg.user_name */}</div>
                </div>
                
                <div className='div-input'>
                <div className='label'>Phone Number<span>*</span></div>
                    <input 
                        value={user.phone_no} 
                        className='text-input input-phone' 
                        id='input-phone' type='text' 
                        placeholder='Enter your phone number' 
                        autoComplete='off'
                        onChange={(e) => {
                            dispatch(
                                setStateInfo({
                                    ...user, phone_no: e.target.value
                                })
                            )
                        }}/>
                        <div className='validate-msg'>{/* error_msg.phone_no */}</div>
                </div>

                <div className='div-input'>
                    <div className='label'>Address<span>*</span></div>
                    <select 
                        name='address' 
                        id='address' 
                        className='address'
                        value={user.address}
                        onChange={(e) => {
                            dispatch(
                                setStateInfo({
                                    ...user, address: user.address
                                })
                            )
                        }}
                        >
                        <option value='' disabled>Please choose an option</option>
                        <option 
                            value='ba dinh'>
                                Ba Dinh</option>
                        <option 
                            value='cau giay'>
                                Cau Giay</option>
                    </select>
                    <div className='validate-msg'>{/* error_msg.address */}</div>
                </div>

                <div className='div-input'>
                    <div className='label'>
                        Gender<span>*</span>
                    </div>
                    <div className='radio'>
                        <input 
                            type='radio' 
                            name='radio' 
                            id='male' 
                            value='male'
                            onChange={(e) => {
                                dispatch(
                                    setStateInfo({
                                        ...user, radio: 'male'
                                    })
                                )
                            }}
                            checked={user.radio === 'male'}
                            />
                        
                        <label htmlFor='male'>Male</label>
                        
                        <input 
                            type='radio' 
                            name='radio' 
                            id='female' 
                            value='female'
                            onChange={(e) => {
                                dispatch(
                                    setStateInfo({
                                        ...user, radio: 'female'
                                    })
                                )
                            }}
                            // checked={user.radio === 'female'}
                            />
                        
                        <label htmlFor='female'>Female</label>
                    </div>
                </div>

                <div className='div-input'>
                    <div className='label'>Email<span>*</span></div>
                    <input
                        value={user.email}
                        className='text-input input-email' 
                        id='input-email' 
                        type='text' 
                        name='email' 
                        placeholder='Enter your email'
                        onChange={(e) => {
                            dispatch(
                                setStateInfo({
                                    ...user, email: e.target.value
                                })
                            )
                        }}
                        />
                    <div className='validate-msg'>{/* error_msg.email */}</div>
                        
                </div>

                <div className='div-input'>
                    <div className='label'>Date of Birth<span>*</span></div>
                    <input 
                        type="date" 
                        name="dob" 
                        id="dob"
                        className='dob'
                        value={user.dob}
                        onChange={(e) => {
                            dispatch(
                                setStateInfo({
                                    ...user, dob: e.target.value
                                })
                            )
                        }}
                        />
                    <div className='validate-msg'>{/* error_msg.dob */}</div>
                </div>

                {//accept checkbox using a function
                    // if click, add the value of the button to the checkbox []
                    // change the state of the button to checked if the value is in the user.checkbox []
                    // if unchecked, remove the value out of the list
                    // use onChange to handle the state change
                    // onChange: if the value in the list -> checked, else -> unchecked
                }
                <div className='div-input'>
                    <div className='label'>Choose your preference</div>
                    <div className='div-checkbox'>
                        <input 
                            className="input-check" 
                            type="checkbox" 
                            name="checkbox" 
                            id="" 
                            value="pine"
                            /* onChange={() => handleCheckbox('pine')}
                            checked={user.checkbox.includes('pine')} *//>
                        <label htmlFor="checkbox">Pineapple on pizza</label>
                    </div>

                    <div className='div-checkbox'>
                        <input 
                            className="input-check" 
                            type="checkbox" 
                            name="checkbox" 
                            id="" 
                            value="pepp"
                            /* onChange={() => handleCheckbox('pepp')}
                            checked={user.checkbox.includes('pepp')} *//>
                        <label htmlFor="checkbox">Pepperroni on pizza</label>
                    </div>
                </div>

                <div className='div-input'>
                    <textarea
                        className="text-input input-desc" 
                        name="desc" 
                        id="desc" 
                        cols="30" 
                        rows="10" 
                        placeholder="Enter your desciption"
                        value={user.desc}
                        onChange={(e) => {
                            dispatch(
                                setStateInfo({
                                    ...user, desc: e.target.value
                                })
                            )
                        }}>
                    </textarea>
                </div>


                <button type='submit' className={user.id ? 'disabled' : 'avail'}>Add</button>
                <button 
                    className={user.id ? 'avail' : 'disabled'}
                    /* onClick={handleUpdate} */
                    >Update</button>
            </form>
        </div>
    )
}

export default FormDummy