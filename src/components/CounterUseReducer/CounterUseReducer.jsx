import { useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1}
    case 'decrement':
      return {...state, count: state.count - 1}
    case 'incrementCustom':
      return {...state, count: state.count + action.payload}
    case 'updateNumber':
      return {...state, number: Number(action.payload)}
    default:
      throw new Error()
  }
}

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    number: 0
  })

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <input type="number" value={state.number} onChange={(event) => dispatch({ type: 'updateNumber', payload: event.target.value })} />
      <button onClick={() => dispatch({ type: 'incrementCustom', payload: state.number })}>Add Number</button>
    </div>
  )
}

export default CounterUseReducer