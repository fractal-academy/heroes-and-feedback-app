import firebase, { auth } from 'app/services/Firebase'
import { ROUTES_PATHS } from 'app/constants'

const signInWithGoogle = (history) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  auth
    .signInWithPopup(googleProvider)
    .then(() => history.push(ROUTES_PATHS.COMPANIES_ALL))
    .catch((error) => {
      console.log(error.message)
    })
}

export default signInWithGoogle
