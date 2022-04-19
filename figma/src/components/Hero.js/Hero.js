import React, { useState, useEffect } from 'react'
import './Hero.scss'
import { Link } from 'react-router-dom'
import './Hero.scss'
import { db } from '../../fire'
import { toast } from 'react-toastify'
import Navbar from './Navbar'
import styled from 'styled-components'

const Hero = (props) => {
    const { handleLogout } = props
    const [data, setData] = useState({});

    useEffect(() => {
        db.child("contacts").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() })
                console.log("data...", data);
            } else {
                setData({})
            }
        })
        return () => {
            setData({})
        }
    }, [setData])


    const onDelete = (id) => {
        if (window.confirm("Are you sure to delete?")) {
            db.child(`contacts/${id}`).remove((err) => {
                if (err) {
                    toast.error(err)
                } else {
                    toast.success("Contact Deleted Successfully")
                }
            })
        }
    }
    return (

        <>

            <ContainerPane>
                <Navbar handleLogout={handleLogout} data={data} onDelete={onDelete} />

                <div className='table' style={{ marginTop: "100px" }}>
                    <table className='styled-table'>
                        <thead>
                            <tr>
                                <th style={{ textAlign: "center" }}>No</th>
                                <th style={{ textAlign: "center" }}>Name</th>
                                <th style={{ textAlign: "center" }}>Email</th>
                                <th style={{ textAlign: "center" }}>Contact</th>
                                <th style={{ textAlign: "center" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).map((id, index) => {
                                console.log("id...", data);
                                return (
                                    <tr key={id}>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{data[id].name}</td>
                                        <td>{data[id].email}</td>
                                        <td>{data[id].contact}</td>
                                        <td>
                                            <Link to={`/update/${id}`}>
                                                <button className='bttn btn-edit'>Edit</button>
                                            </Link>
                                            <button className='bttn btn-delete' onClick={() => onDelete(id)}>Delete</button>
                                            <Link to={`/view/${id}`}>
                                                <button className='bttn btn-view'>View</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </ContainerPane>
        </>
    )
}

export default Hero

const ContainerPane = styled.div`
    display: flex;
    aligin-items: center;
`