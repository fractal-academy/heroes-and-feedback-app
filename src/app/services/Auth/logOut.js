import { auth } from '../Firebase'

const logOut = () => {
  auth.signOut()
}

export default logOut
