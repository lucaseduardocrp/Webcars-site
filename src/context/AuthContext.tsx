import { onAuthStateChanged } from 'firebase/auth';
import { ReactNode, useState, useEffect, createContext } from 'react';
import { auth } from '../services/firebase';

interface UserProps {
  uid: string;
  name: string | null;
  email: string | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

type AuthContextData = {
  signed: boolean;
  loadingAuth: boolean;
  handleInfoUser: ({ uid, name, email }: UserProps) => void;
  user: UserProps | null;
};

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          name: user?.displayName,
          email: user?.email
        });
        setLoadingAuth(false);
      } else {
        setUser(null);
        setLoadingAuth(false);
      }
    });

    return () => {
      unsub();
    };
  }, []);

  const handleInfoUser = ({ uid, name, email }: UserProps) => {
    setUser({
      uid,
      name,
      email
    });
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, loadingAuth, handleInfoUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
