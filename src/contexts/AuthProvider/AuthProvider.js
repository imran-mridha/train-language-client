import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const providerLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const verifyEmail = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser);
  }

  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const resetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.uid || currentUser.emailVerified) {
        setUser(currentUser)
      }
      setLoading(false)
    })
    return () => unsubscribe();
  }, [])

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (profile) => {
    setLoading(true)
    return updateProfile(auth.currentUser, profile)
  }

  const authInfo = { user, providerLogin, createUser, logIn, verifyEmail, resetPassword, updateUserProfile, logOut, loading, setLoading }

  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;