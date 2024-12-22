
import './App.css'
import { Suspense } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  const todoIds = Array.from({ length: 200 }, (_, i) => i + 1);

  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        {todoIds.map((id, index) => (
          <div key={id}>
            <Todo id={id} />
            {index !== todoIds.length - 1 && <br />}
          </div>
        ))}
      </Suspense>
    </RecoilRoot>
  );
}

function Todo({id}) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  
  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {todo.title} {todo.completed ? "✅" : "❌"}
      <br />
    </>
  );
}

export default App;
