import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import HomeLayout from '../Layout/HomeLayout';
import EventPage from '../Pages/EventPage';
import AddEventPage from '../Pages/AddEventPage';
import MyEventsPage from '../Pages/MyEventsPage';

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
