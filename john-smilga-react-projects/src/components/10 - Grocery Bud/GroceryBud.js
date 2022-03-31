import React, { useEffect, useState } from 'react';
import './GroceryBud.css';
import List from './List';
import Alert from './Alert';

const GroceryBud = () => {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState(() =>
        localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []);

    const [editId, setEditId] = useState(null);

    const [alert, setAlert] = useState({
        show: false,
        message: '',
        type: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if todo is ''
        if (!todo) {
            showAlert(true, 'danger', 'please enter todo');
            return;
        }

        // Check if edit todo
        if (editId) {
            const newList = [...list];
            const editTodo = newList.find(item => item.id === editId);
            const indexEditTodo = newList.indexOf(editTodo);
            if (indexEditTodo !== -1) {
                newList[indexEditTodo].todo = todo;
            }
            setTodo('');
            setEditId(null);
            setList(newList);
            showAlert(true, 'success', 'value updated');
            return;
        }

        // Add todo
        const newTodo = {
            id: new Date().getTime().toString(),
            todo
        };
        setList([...list, newTodo]);
        setTodo('');
        showAlert(true, 'success', 'add todo to the list');
    }

    const handleDeleteClick = (id) => {
        setList(list.filter(item => item.id !== id));
        showAlert(true, 'danger', 'todo removed');
    }

    const handleEditClick = (id) => {
        const editTodo = list.find(item => item.id === id);
        setTodo(editTodo.todo);
        setEditId(id);
    }

    const handleClearAll = () => {
        setList([]);
        showAlert(true, 'danger', 'empty list');
    }

    const showAlert = (show = true, type = '', message = '') => {
        setAlert({ show, message, type });
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list])

    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

                <h3>todo list</h3>
                <div className="form-control">
                    <input
                        className="grocery"
                        placeholder="enter todo..."
                        value={todo}
                        onChange={e => setTodo(e.target.value)}
                    />
                    <button type="submit" className="submit-btn">
                        {editId ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>

            {
                list.length > 0 && (
                    <div className="grocery-container">
                        <List
                            list={list}
                            onDeleteClick={handleDeleteClick}
                            onEditClick={handleEditClick}
                        />
                        <button className="clear-btn" onClick={handleClearAll}>
                            clear items
                        </button>
                    </div>
                )
            }
        </section>
    )
}

export default GroceryBud;
