import React, { useState, useEffect, createContext } from 'react'
import { auth } from 'app/services/Firebase'
import md5 from 'md5'
export const UserContext = createContext({ user: null })
const UserProvider = (props) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email, photoUrl } = user
        const userName = displayName
          ? [displayName[0], displayName[1]]
          : ['', '']
        setUser({
          firstName: userName[0],
          surname: userName[1],
          email: email,
          image: photoUrl || '',
          id: md5(email)
        })
      }
    })
  }, [])
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  )
}

export default UserProvider
