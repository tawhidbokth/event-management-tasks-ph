import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import HomeLayout from '../Layout/HomeLayout';
import EventPage from '../Pages/EventPage';
import AddEventPage from '../Pages/AddEventPage';
import MyEventsPage from '../Pages/MyEventsPage';
import RegisterPage from '../Pages/Auth/RegisterPage';
import LoginPage from '../Pages/Auth/login';

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
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'events',
        element: <EventPage />,
      },
      {
        path: 'add-event',
        element: <AddEventPage />,
      },
      {
        path: 'my-events',
        element: <MyEventsPage />,
      },
    ],
  },
]);
export default router;
