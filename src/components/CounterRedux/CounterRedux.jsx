import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./CounterReduxSlice"

const CounterRedux = () => {
  const counter = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Current count: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default CounterRedux