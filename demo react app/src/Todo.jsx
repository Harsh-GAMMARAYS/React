import React, { useState, memo } from "react";

let counter = 4;

export default function TodoApp() {
    const [todos, setTodos] = useState([
        {   
            id:1,
            title: "Go to gym",
            description: "Go till 7-8",
            
        },
        {   
            id:2,
            title: "Go to class",
            description: "Go till 7-8",
            
        },
        {   
            id:3,
            title: "Go to gym",
            description: "Go till 7-8",
            
        }
    ]);

    function addTodo() {
        setTodos([...todos, {
            id:counter++,
            title: "new todo",
            description: "description"
        }])
    }

    return (
        <>
            <button onClick={addTodo}> Add a random Todo </button>
            {todos.map(todo => (
                <Todo key={todo.id} title={todo.title} description={todo.description} />
            ))}
        </>
    );
}

function Todo({title, description}) {
    return (
        <>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </>
    );
}
