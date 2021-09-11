import React, {useEffect, useState} from 'react';
import TodoItem from "../TodoItem";
import TodoHeader from "../TodoHeader";
import axios from "axios";

const Todo = () => {
    const [todos, setTodos] = useState([])

    const [value, setValue] = useState("")

    const handleInput = (e) => {
        setValue(e.target.value)
    }

    const filterByDate = (type) => {
        const times = {
            day: 24 * 60 * 60 * 1000,
            week: 24 * 60 * 60 * 1000 * 7,
            month: 24 * 60 * 60 * 1000 * 30,
            all: +new Date()
        }
        console.log(type, times, times[type])
        axios(`https://613ae97d110e000017a453d0.mockapi.io/todos`)
            .then(({data}) => setTodos(data.filter(item => {
                console.log(data)
                console.log(+new Date() - item.createdAt < times[type])
                return +new Date() - item.createdAt < times[type]
            })))

    }
    const addTodo = () => {
        const newTodo = {
            id: todos[todos.length] ? todos[todos.length - 1].id + 1 : 1,
            title: value,
            createdAt: +new Date()
        }
        axios.post(`https://613ae97d110e000017a453d0.mockapi.io/todos`, newTodo)
            .then(({data}) => {
                setTodos([...todos, data])
                setValue("")
            })

    }
    const enter = (e) => {
        if (value.trim() && e.key === "Enter") {
            addTodo()
        }
    }
    const deleteTodo = (id) => {
        axios.delete(`https://613ae97d110e000017a453d0.mockapi.io/todos/${id}`)
            .then(({data}) => {
                setTodos(todos.filter(item => item.id ? item.id !== id : data))
            })
    }
    //
    // const backspace = (id, title) => {
    //     axios.put(`https://613ae97d110e000017a453d0.mockapi.io/todos/${id}`, {title})
    //         .then(({data}) => setTodos(todos.map(item => item.title &&  item.id === id ? title.slice(-2, -1) : data)))
    // }

    const saveTodo = (id, title) => {
        axios.put(`https://613ae97d110e000017a453d0.mockapi.io/todos/${id}`, {title})
            .then(({data}) =>  setTodos(todos.map(item => item.id === id ? data : item)))


    }
    const doneTodo = (id, status) => {
        axios.put(`https://613ae97d110e000017a453d0.mockapi.io/todos/${id}`, {isDone: !status})
            .then(({data}) =>  setTodos(todos.map(item => item.id === id ? data : item)))
    }

    useEffect(() => {
        axios(`https://613ae97d110e000017a453d0.mockapi.io/todos`)
            .then(({data}) => setTodos(data))
    }, [])
    return (
        <div className="row my-5">
            <div className="col-md-4 offset-md-4">
                <TodoHeader filterByDate={filterByDate} handleInput={handleInput} length={todos.length} enter={enter} value={value}
                            addTodo={addTodo}/>

                <ul className="list-group">
                    {
                        todos.map(item =>
                            <TodoItem  key={item.id} doneTodo={doneTodo}  item={item} saveTodo={saveTodo} deleteTodo={deleteTodo}/>  // backspace={backspace}
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Todo;