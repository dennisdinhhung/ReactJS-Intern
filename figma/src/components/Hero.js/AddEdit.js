import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import { db } from '../../fire'
import { useParams } from 'react-router-dom'
import './AddEdit.css'


const AddEdit = () => {
    const initialState = {
        name: "",
        email: "",
        contact: "",
    }

    const [state, setState] = useState(initialState)
    const [data, setData] = useState({})

    const { name, email, contact } = state

    const navigation = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        db.child("contacts").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() })
            } else {
                setData({})
            }
        })
        return () => {
            setData({})
        }
    }, [id])

    useEffect(() => {
        if (id) {
            setState({ ...data[id] })
        } else {
            setState({ ...initialState })
        }
    }, [id, data])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !contact) {
            toast.error("Please provide value each input")
            return;
        } else {
            if (!id) {
                db.child("contacts").push(state, (err) => {
                    if (err) {
                        toast.error(err)
                    } else {
                        toast.success("Contact Added Successfully!")
                    }
                })
            } else {
                db.child(`contacts/${id}`).set(state, (err) => {
                    if (err) {
                        toast.error(err)
                    } else {
                        toast.success("Contact Update Successfully!")
                    }
                })
            }

            setTimeout(() => navigation('/'), 500)
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    return (
        <>
            <div className='updateForm' style={{ marginTop: "100px" }}>
                <form style={{
                    margin: "auto",
                    padding: "15px",
                    maxheight: "400px",
                    alignContent: "center",
                }}
                    onSubmit={handleSubmit}
                >
                    <label htmlFor='name'>Name</label>
                    <input className='valueInput'
                        type='text'
                        id='name'
                        name='name'
                        placeholder='your name...'
                        value={name || ""}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='email'>Email</label>
                    <input className='valueInput'
                        type='email'
                        id='email'
                        name='email'
                        placeholder='your email...'
                        value={email || ""}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='contact'>Contact</label>
                    <input className='valueInput'
                        type='contact'
                        id='contact'
                        name='contact'
                        placeholder='your contact...'
                        value={contact || ""}
                        onChange={handleInputChange}
                    />
                    <input className='valueInput' type='submit' value={id ? "Update" : "Save"} />
                </form>
            </div>
        </>
    )
}

export default AddEdit