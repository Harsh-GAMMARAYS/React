
import './App.css'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {

  const todoIds = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <RecoilRoot>
      {todoIds.map(id => (
        <Todo key={id} id={id} />
      ))}
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  if (todo.state === "loading") {
    return <div>loading</div>
  }

  return (
    <>
      <div>{todo.contents.title}
        {todo.contents.completed ? "✅" : "❌"}</div>
      <br />
    </>
  )
}

export default App
