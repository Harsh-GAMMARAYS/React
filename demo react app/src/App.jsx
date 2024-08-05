import { useState } from 'react'
import Greeter from './Greeter'
import './App.css'
import Die from './Die'
import ListPicker from './ListPicker'
import Button from './Button'
import Todo from './Todo'
import Slots from './Slots'

function App() {
  return (
    <>
   <Slots val1="🍒" val2="🍒" val3="🍒"/>
   <Slots val1="🍒" val2="🍌" val3="🍒"/>
   </>
  )
}

export default App
