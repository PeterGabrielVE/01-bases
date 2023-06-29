import { useReducer, useState } from "react";


interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE :CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

const counterReducer = () =>{
  
}

export const CounterReducerComponent = ({ initialValue = 0 }: Props) => {

  const [state, dispatch] = useReducer(first, INITIAL_STATE)
  const [ counter, setCounter ] = useState(initialValue);

  const handleClick = () =>{
    setCounter( prev => prev + 1 )
  }

  return (
    <>
      <h1>Counter Reducer: { counter }</h1>
      <button onClick={ handleClick }>
        +1
      </button>
    </>
  )
}


