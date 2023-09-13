import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import AuthProvider from './context/AuthContext';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer position="top-right" autoClose={2000} closeOnClick theme="colored" />
      <RouterProvider router={router} />;
    </AuthProvider>
  );
};

export default App;
