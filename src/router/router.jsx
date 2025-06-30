import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import HomeLayout from '../Layout/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <div>Error occurred!</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
export default router;
