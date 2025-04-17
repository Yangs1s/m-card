import React from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import SignUpForm from '@components/signUp/Form'
import { IformValues } from '@models/signUp'
import { auth, store } from '@remote/firebase'
import { collection, doc, setDoc } from 'firebase/firestore'
import { COLLECTIONS } from '@constants/index'
const SignUpPage = () => {
  const handleSubmit = async (formValues: IformValues) => {
    const { email, password, name } = formValues

    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(user, {
      displayName: name,
    })

    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: name,
    }

    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)
  }
  return (
    <div>
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  )
}

export default SignUpPage
