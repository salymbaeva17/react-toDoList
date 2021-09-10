import React from 'react';

const TodoHeader = ({handleInput, enter, addTodo, length, filterByDate, value}) => {
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
            <div className="d-flex align-items-center justify-content-start mb-3">
                <h6 className="m-0 me-2">Sort by</h6>
                <div className="d-flex align-items-center">
                    <button type="button" onClick={() => filterByDate("all")}
                            className="btn btn-sm btn-secondary me-2">all
                    </button>
                    <button type="button" onClick={() => filterByDate("day")}
                            className="btn btn-sm btn-secondary me-2">day
                    </button>
                    <button type="button" onClick={() => filterByDate("week")}
                            className="btn btn-sm btn-secondary me-2">week
                    </button>
                    <button type="button" onClick={() => filterByDate("month")}
                            className="btn btn-sm btn-secondary">month
                    </button>
                </div>

            </div>
        </>

    );
};

export default TodoHeader;