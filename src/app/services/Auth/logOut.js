import { auth } from 'app/services/Firebase'

const logOut = (history) => {
  auth
    .signOut()
    .then(() => history.push('/login'))
    .catch((error) => {
      console.log(error.message)
    })
}

export default logOut
