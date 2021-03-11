import { auth } from 'app/services/Firebase'

const logOut = () => {
  auth.signOut().catch((error) => {
    console.log(error.message)
  })
}

export default logOut
