import { useEffect, useState } from 'react'
import axios from 'axios';

export const useTodos = (n) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const value = setInterval(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
          setTodos(res.data);
          setLoading(false);
        })
      }, n * 1000)
  
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
          setTodos(res.data);
          setLoading(false);
        })
  
      return () => {
        clearInterval(value);
      }
    }, [n])
  
    return { todos, loading };
  }