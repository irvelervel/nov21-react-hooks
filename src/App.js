import './App.css'
import { useState } from 'react'
import Lifecycle from './components/Lifecycle'

// REACT HOOKS PROVIDE STATE AND LIFECYCLE TO FUNCTIONAL COMPONENTS
// for declaring a state in a functional component use useState()

const App = () => {
  // REMEMBER THE 2 RULES OF HOOKS:
  // 1) USE REACT HOOKS JUST IN REACT FUNCTIONAL COMPONENTS
  // 2) USE REACT HOOKS ALWAYS AT THE TOP LEVEL OF YOUR COMPONENT

  // let's declare a state variable in a functional component!
  const [count, setCount] = useState(0)
  // wtf is this?? useState() when invoked is returning you an array!
  // this array is made by two elements: the state variable and a FUNCTION
  // the function in second position SETS the value for the first element
  // you can treat it as a setState that works just for count!
  // in a class component it would like this:
  // state = {
  //   count: 0,
  //   isLoading: true
  // }
  // the argument you're going to invoke useState() with is going to be
  // the initial value for your state property (in our case, count)
  const [show, setShow] = useState(false)

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setShow(!show)}>CLICK ME?</button>
        {show && <p>SECRET MESSAGE</p>}
        <Lifecycle count={count} />
      </header>
    </div>
  )
}

export default App
