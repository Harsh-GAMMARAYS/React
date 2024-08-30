export default function CardWrapper({ children }) {
    return <div style={{
        border: "1px solid white",
        padding: 10,
        margin: 10
    }}>
        {children}
    </div>
}



import React, { useEffect, useState } from 'react';
import { memo } from 'react';


function App() {
    const [todos, setTodos] = useState([]);

    function fetch_data() {
        fetch('https://sum-server.100xdevs.com/todos')
            .then(async (res) => {
                const json = await res.json();
                const obj = json.todos; // array of objects
                setTodos(obj);
            });
    }

    useEffect(() => {
        fetch_data();
        setInterval(() => {
            fetch_data();
        }, 5000);
    }, []); // Runs when the component mounts.

    return (
        <div>
            <h1>Todos:</h1>
            {todos.map((todo) => (
                <TodoWrapper key={todo.id}>
                    <Todo title={todo.title} description={todo.description} />
                </TodoWrapper>
            ))}
        </div>
    );
}

// We have put the TodoWrapper inside the memo, which skips re-rendering the child component, if its props have not changed.

const TodoWrapper = memo((props) => {
    return (
        <div style={{ border: "2px solid black", margin: 10, padding: 20, backgroundColor: 'orange' }}>
            {props.children}
        </div>
    );
})

function Todo(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
        </div>
    );
}

export default App;