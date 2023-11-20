import { useSelector } from "react-redux"

const Welcome = () => {
  const { firstname, lastname, age, single } = useSelector(state => state.user)
  const count = useSelector(state => state.counter.count)

  return (
    <>
      <h2>{firstname} {lastname} is {age} years old and {single ? 'single' : 'not single'}.</h2>
      <p>The current count is {count}</p>
    </>
  )
}

export default Welcome