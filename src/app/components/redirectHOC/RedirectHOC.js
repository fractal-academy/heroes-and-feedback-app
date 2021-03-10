import { UserContext } from 'app/context/UserContext'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

const RedirectHOC = (props) => {
  const user = useContext(UserContext)
  const history = useHistory()

  if (!user) history.push('/login')
  return props.children
}

export default RedirectHOC
