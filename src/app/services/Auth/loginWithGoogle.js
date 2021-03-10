import firebase, { auth } from '../Firebase'
import { Redirect, useHistory } from 'react-router-dom'

const loginWithGoogle = (history) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(googleProvider).then((res) => {
    sessionStorage.setItem('loggedIn', 'true')
    history.push('/companies')
  })
}

export default loginWithGoogle
