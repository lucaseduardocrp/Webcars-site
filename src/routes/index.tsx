import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import { Home } from '../pages/home';
import { CarDetail } from '../pages/CarDetail';
import { Dashboard } from '../pages/dashboard';
import { NewCar } from '../pages/dashboard/NewCar';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { Private } from './private';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/car/:id',
        element: <CarDetail />
      },
      {
        path: '/dashboard',
        element: (
          <Private>
            <Dashboard />
          </Private>
        )
      },
      {
        path: '/dashboard/new',
        element: (
          <Private>
            <NewCar />
          </Private>
        )
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

export { router };
