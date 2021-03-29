import firebase, { auth, firestore } from 'app/services/Firebase'
import { ROUTES_PATHS } from 'app/constants'
import { USERS } from 'app/constants/collections'
import { setData, getTimestamp } from 'app/services'

const signInWithGoogle = (history, dispatch) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  auth
    .signInWithPopup(googleProvider)
    .then(async (res) => {
      const user = res.user
      if (user) {
        const userDBData = await firestore
          .collection(USERS)
          .where('id', '==', user?.uid)
          .get()
        if (!userDBData.docs.length) {
          const userData = {
            id: user.uid,
            firstName: user.displayName.split(' ')[0] || 'No',
            surname: user.displayName.split(' ')[1] || 'name',
            currentExp: 0,
            email: user.email,
            image: user.photoURL || '',
            role: 'User',
            birthday: getTimestamp().fromDate(new Date())
          }

          await setData(USERS, user.uid, userData)
          await dispatch({
            type: 'SET_DATA',
            data: { ...user, userDBData: userData }
          })
        }
      }
      history.push(ROUTES_PATHS.COMPANIES_ALL)
    })
    .catch((e) => {
      console.log(e.message)
    })
}

export default signInWithGoogle
