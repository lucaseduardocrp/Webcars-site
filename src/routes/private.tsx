/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

interface PrivateProps {
  children: ReactNode;
}

export const Private = ({ children }: PrivateProps): any => {
  const { loadingAuth, signed } = useContext(AuthContext);

  if (loadingAuth) {
    return <div></div>;
  }

  if (!signed) {
    return <Navigate to="/login" />;
  }

  return children;
};
