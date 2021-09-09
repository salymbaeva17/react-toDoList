import React from 'react';

const TodoHeader = ({handleInput, enter, addTodo, length, value}) => {
    return (
        <> <div className="d-flex justify-content-between align-items-center">
            <h1>TodoList</h1>
            <span>Items: {length}</span>
        </div>
            <div className="d-flex mb-4">
                <input type="text" onKeyPress={enter} value={value} onChange={handleInput} className="form-control me-2"/>
                <button className="btn btn-primary" type="button" onClick={addTodo}
                        disabled={!value.trim()}>Добавить
                </button>
            </div>
        </>

    );
};

export default TodoHeader;