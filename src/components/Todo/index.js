import React, {useState} from 'react';
import {nanoid} from "nanoid";
import TodoItem from "../TodoItem";
import TodoHeader from "../TodoHeader";

const Todo = () => {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Выпить весь чай'},
        {id: 1, title: 'Собраться на работу'}
    ])
    const [value, setValue] = useState("")

    const handleInput = (e) => {
        setValue(e.target.value)
    }
    const addTodo = () => {
        const newTodo = {
            id: nanoid(),  // todos[todos.length] ? todos[todos.length - 1].id + 1 : 1,
            title: value
        }
        setTodos([...todos, newTodo])
        setValue("")
    }
    const enter = (e) => {
        if(e.key === "Enter"){
            addTodo()
        }
    }
    const deleteTodo = (id) => {
        const deletedItem = todos.filter(item => item.id !== id)
        setTodos(deletedItem)
    }

    const clearAll = () => {
        setTodos([])
    }

    const saveTodo = (id, title) => {
        setTodos(todos.map(item => item.id === id ? {...item, title} : item))
    }
    return (
        <div className="row my-5">
            <div className="col-md-4 offset-md-4">
                <TodoHeader handleInput={handleInput} length={todos.length} enter={enter} value={value} addTodo={addTodo}/>
                <ul className="list-group">
                    {
                        todos.map(item =>
                            <TodoItem item={item} saveTodo={saveTodo} deleteTodo={deleteTodo}/>
                        )
                    }
                </ul>
                <button className="btn btn-danger w-100 mt-3" onClick={clearAll}>Удалить все</button>
            </div>
        </div>
    );
};

export default Todo;