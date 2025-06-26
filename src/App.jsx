
import './App.css'
import { sum } from './helper'
import Lottery from './Lottery'

function App() {

  let winningCondition = (ticket)=>{
    // return sum(ticket) == 15;
    return ticket[0] == 0;
  }

  return (
    <>
     <Lottery winningCondition={winningCondition}/>
    </>
  )
}

export default App
