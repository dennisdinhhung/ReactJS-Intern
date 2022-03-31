import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ list, onDeleteClick, onEditClick }) => {
    return (
        <div className="grocery-list">
            {
                list.map((item) => {
                    const { id, todo } = item;
                    return (
                        <article className="grocery-item" key={id}>
                            <p className="title">{todo}</p>
                            <div className="btn-container">
                                <button
                                    className="edit-btn"
                                    onClick={() => onEditClick(id)}
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    className="delete-btn"
                                    onClick={() => onDeleteClick(id)}
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default List;
