import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faSave, faTrash} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({item, deleteTodo, saveTodo}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(item.title)
    const handleEdit = () => {
        setIsEdit(true)
    }
    const handleNewValue = (e) => {
        setNewTitle(e.target.value)
    }
    const handleSave = () => {
        setIsEdit(false)
        saveTodo(item.id, newTitle)
    }

    return (
        <li className="d-flex justify-content-between align-items-center list-group-item">
            {isEdit ?
                <input type="text" defaultValue={item.title} onChange={handleNewValue} className="form-control me-2"/> :
                <span className="">{item.title}</span>}
            <div className="d-flex">
                <button type="button" onClick={isEdit ? handleSave : handleEdit}
                        className="btn btn-outline-warning me-2">
                    {
                        isEdit ? <FontAwesomeIcon icon={faSave}/> : <FontAwesomeIcon icon={faEdit}/>
                    }
                </button>
                <button type="button" onClick={() => deleteTodo(item.id)}
                        className="btn btn-outline-danger">
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </li>
    );
};

export default TodoItem;