import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Link, useParams } from 'react-router-dom'
import { db } from '../../fire'
import './View.css'

const View = () => {
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        db
            .child(`contacts/${id}`)
            .get()
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setUser({ ...snapshot.val() })
                } else {
                    setUser({})
                }
            })
    }, [id])
    return (
        <>
            <div id='container' style={{ marginTop: "150px" }}>
                <div className='card'>
                    <div className='card-header'>
                        <p>User Contact Detail</p>
                    </div>
                    <div className='container-infor'>
                        <strong>ID:</strong>
                        <span>{id}</span>
                        <br />
                        <br />
                        <strong>Name:</strong>
                        <span>{user.name}</span>
                        <br />
                        <br />
                        <strong>Email:</strong>
                        <span>{user.email}</span>
                        <br />
                        <br />
                        <strong>Contact:</strong>
                        <span>{user.contact}</span>
                        <br />
                        <br />
                        <Link to='/'>
                            <button className='bttn btn-edit'>Go back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View