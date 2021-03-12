import firebase, { auth } from 'app/services/Firebase'

const signInWithGoogle = (history) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  auth
    .signInWithPopup(googleProvider)
    .then(() => history.push('/companies'))
    .catch((error) => {
      console.log(error.message)
    })
}

export default signInWithGoogle
