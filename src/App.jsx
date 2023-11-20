import { useSelector } from "react-redux"
import CounterRedux from "./components/CounterRedux/CounterRedux"
import User from "./components/User/User"
import Welcome from "./components/Welcome/Welcome"

const App = () => {
  const counter = useSelector(state => state.counter.count)

  return (
    <div>
      <CounterRedux />
      <h2>App component: {counter}</h2>
      <User />
      <Welcome />
    </div>
  )
}

export default App