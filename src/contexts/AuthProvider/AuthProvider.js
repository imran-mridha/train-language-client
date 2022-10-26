import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider)
  }

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const logOut = () => {
    return signOut(auth)
  }

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  const authInfo = { user, providerLogin, createUser, logIn, verifyEmail, resetPassword,updateUserProfile,logOut }

  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;