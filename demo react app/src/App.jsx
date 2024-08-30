import { useState, memo } from 'react'
import './App.css'
import TodoApp from './Todo';
import CardWrapper from './CardWrapper';

function App() {
  // const [title, setTitle] = useState("my name is Harshit");

  // function updateTitle(){
  //   setTitle(`my name is ${Math.random()}`)
  // }
  return (
    <div style={{display: "flex"}}>
      <CardWrapper>Hi There</CardWrapper>
      <CardWrapper>Hi There II</CardWrapper>

      {/* <TodoApp/> 
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
      <Header title="Rakshita" />
      <Header title="Rakshita" />
      <Header title="Rakshita" />
      <Header title="Rakshita" /> */}
    </div>
  )
}

const Header = memo(function Header({ title }) {
  return <h1>
    {title}
  </h1>
})



export default App
