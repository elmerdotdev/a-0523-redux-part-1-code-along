import { useSelector, useDispatch } from "react-redux"

import { 
  updateFirstname,
  updateLastname,
  updateAge,
  updateSingle } from "./UserSlice"

const User = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <>
      <form>
        <input type="text" value={user.firstname} onChange={(e) => dispatch(updateFirstname(e.target.value))} />
        <input type="text" value={user.lastname} onChange={(e) => dispatch(updateLastname(e.target.value))} />
        <input type="number" value={user.age} onChange={(e) => dispatch(updateAge(e.target.value))} />
        <input type="checkbox" checked={user.single} onChange={() => dispatch(updateSingle())} />
      </form>
    </>
  )
}

export default User