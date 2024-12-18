import './App.css'
import { useContext } from 'react'
import { CountContext } from './components/context';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';

//recoil tut

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
        <IsEven />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>


    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "It is Even" : null}
  </div>
}


export default App
