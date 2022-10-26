import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser]= useState(null);

  // const [loading, setLoading] = useState(true)

  const createUser =(email,password) => {
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

  const authInfo = {user,providerLogin,createUser,logIn,verifyEmail}
  
  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;