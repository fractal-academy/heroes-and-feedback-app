import firebase, { auth } from 'app/services/Firebase'

const signInWithGoogle = (dispatch) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(googleProvider).catch((error) => {
    console.log(error.message)
  })
}

export default signInWithGoogle
