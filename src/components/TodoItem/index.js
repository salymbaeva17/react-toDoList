import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackspace, faCheck, faEdit, faSave, faTrash} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({item, deleteTodo, doneTodo, saveTodo, backspace}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(item.title)
    const handleEdit = () => {
        setIsEdit(true)
    }
    const handleNewValue = (e) => {
        setNewTitle(e.target.value)
    }
    const handleSave = () => {
        saveTodo(item.id, newTitle)
        setIsEdit(false)
    }


    return (
        <li className="d-flex justify-content-between align-items-center list-group-item">
            {isEdit ?
                <input type="text" defaultValue={item.title} onChange={handleNewValue} className="form-control me-2"/> :
                <span className={item.isDone && "text-decoration-line-through text-secondary" }>{item.title}</span>}
            <div className="d-flex">
                { !isEdit && <button type="button" onClick={() => doneTodo(item.id, item.isDone)}
                         className="btn btn-outline-success btn-sm me-2">
                    <FontAwesomeIcon icon={faCheck}/>
                </button>}
                <button type="button" onClick={isEdit ? handleSave : handleEdit}
                        className="btn btn-outline-warning me-2 btn-sm">
                    {
                        isEdit ? <FontAwesomeIcon icon={faSave}/> : <FontAwesomeIcon icon={faEdit}/>
                    }
                </button>
                <button type="button" onClick={ () => deleteTodo(item.id)} // isEdit? () => backspace(item.id, item.title) :
                        className="btn btn-outline-danger btn-sm">
                    {
                       isEdit ? <FontAwesomeIcon icon={faBackspace} /> : <FontAwesomeIcon icon={faTrash}/>
                    }

                </button>
            </div>
        </li>
    );
};

export default TodoItem;