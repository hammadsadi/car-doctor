import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { loading, createUser, loginUser };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
