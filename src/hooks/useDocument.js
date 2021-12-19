/// this hook is for fetching one single document from Firebase


import { useEffect, useState } from "react"
import { firestore } from "../firebase"


export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {

    const ref = firestore.collection(collection).doc(id)

    const unsub = ref.onSnapshot((snapshot) => {
      if (snapshot.data()) {
        setDocument({ ...snapshot.data(), id: snapshot.id })
        setError(null)
      } else {
        setError('no video with this ID exists')
      }

    }, (error) => {
      console.log(error)
      setError("Failed to fetch document", error.message)
    })

    return () => unsub()

  }, [collection, id])

  return { document, error }
}