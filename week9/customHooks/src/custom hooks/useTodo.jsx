import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);

export const Todo = (interval) => {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher, {
    refreshInterval: interval * 1000
  });

  return {
    todos: data,
    loading: !error && !data,
    error
  };
};


