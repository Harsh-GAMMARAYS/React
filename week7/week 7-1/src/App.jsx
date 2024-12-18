import './App.css'
// import React, { lazy } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// const Dashboard = lazy(() => import('./components/Dashboard')) 
// const Landing = lazy(() => import('./components/Landing'))
import { useContext, useState } from 'react'
import { CountContext } from './components/context';



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter> */}
      <CountContext.Provider value={{ count, setCount }}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count() {
  const {setCount} = useContext(CountContext);
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const {count} = useContext(CountContext);

  return <div>
    {count}
  </div>
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>


    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
