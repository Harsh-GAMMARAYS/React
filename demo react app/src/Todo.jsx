import React, { useState } from "react";

export default function TodoApp() {
    const [todos, setTodos] = useState([
        {
            title: "Go to gym",
            description: "Go till 7-8",
            completed: false
        },
        {
            title: "Go to gym",
            description: "Go till 7-8",
            completed: true
        },
        {
            title: "Go to gym",
            description: "Go till 7-8",
            completed: false
        }
    ]);

    function addTodo() {
        setTodos([...todos, {
            title: "new todo",
            description: "description"
        }])
    }

    return (
        <>
            <button onClick={addTodo}> Add a random Todo </button>
            {todos.map((todo, index) => (
                <Todo key={index} title={todo.title} description={todo.description} />
            ))}
        </>
    );
}

function Todo(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </>
    );
}
