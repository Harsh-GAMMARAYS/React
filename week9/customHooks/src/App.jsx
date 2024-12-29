import { Todo } from './custom hooks/useTodo';
import { UserIsOnline } from './custom hooks/UserIsOnline';
import { useMousePointer } from './custom hooks/useMousePointer';
import { useDimensions } from './custom hooks/useDimensions';
import { useInterval } from './custom hooks/useInterval';
import { useDebounce } from './custom hooks/useDebounce';
import './App.css';
import { useState } from 'react';


// Main App component
function App() {
  // const isOnline = UserIsOnline();

  // if (!isOnline) {
  //   return <div>Offline</div>;
  // } else return <div>You are online</div>;

  // const mousePointer = useMousePointer();

  // const { width, height } = useDimensions();

  // const count = useInterval();
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 1000);
  console.log(debouncedValue);

  return (
    <>
      {/* Your mouse is {mousePointer.x} and {mousePointer.y}
       <p>Window width: {width}px</p>
      <p>Window height: {height}px</p> 
      Timer is at {count} */}

      <input type="text" value={inputValue} onChange={(e) => {
        setInputValue(e.target.value);
      }} placeholder='Search...' />
    </>
  )
}

export default App;
