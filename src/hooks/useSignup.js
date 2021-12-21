import { useState, useEffect } from 'react'
import { auth, storage, firestore } from '../firebase/'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()



  const signup = async (email, password, displayName, avatar) => {
    setError(null)
    setIsPending(true)

    try {
      // signup
      const res = await auth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }


      const defaultAvatarULR = `https://firebasestorage.googleapis.com/v0/b/fir-610f8.appspot.com/o/thumbnails%2FavatarDefault.jpg?alt=media&token=f7194613-a96d-4bef-addd-5da8411955f8`
      // update user Avatar. First this creates a folder with user uid as subfolder
      if (avatar) {
        const uploadPath = `avatars/${res.user.uid}/${avatar.name}`
        const imgRes = await storage.ref(uploadPath).put(avatar)   // we select where we want to store, and then we put it
        const imgUrl = await imgRes.ref.getDownloadURL()
      }

      // add display name to user. If no avatar uploaded, use a default image
      await res.user.updateProfile({ displayName, photoURL: avatar ? imgUrl : defaultAvatarULR })

      // create user collection with a doc inside for each user :
      await firestore.collection('users').doc(res.user.uid).set({
        online: true,
        displayName: displayName,
        photoURL: avatar ? imgUrl : defaultAvatarULR,
        uid: res.user.uid,
      })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    }
    catch (err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { signup, error, isPending }
}