// components/EventPage.jsx

import { useState } from 'react';

const dummyEvents = [
  {
    id: 1,
    title: 'Tech Innovation Meetup',
    name: 'Rafiul Islam',
    date: '2025-07-10',
    time: '15:30',
    location: 'Dhaka, Bangladesh',
    description:
      'A gathering of tech enthusiasts exploring innovation and future trends.',
    attendeeCount: 24,
  },
  {
    id: 2,
    title: 'Startup Pitch Day',
    name: 'Tanisha Alam',
    date: '2025-07-08',
    time: '11:00',
    location: 'Sylhet Convention Hall',
    description:
      'Startup founders present ideas to potential investors and mentors.',
    attendeeCount: 12,
  },
  {
    id: 3,
    title: 'UI/UX Design Bootcamp',
    name: 'Shakil Hossain',
    date: '2025-07-05',
    time: '10:00',
    location: 'Chattogram IT Park',
    description:
      'Learn modern UI/UX principles with hands-on design challenges.',
    attendeeCount: 30,
  },
];

const EventPage = () => {
  const [events, setEvents] = useState(dummyEvents);

  const handleJoin = id => {
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === id && !event.joined
          ? { ...event, attendeeCount: event.attendeeCount + 1, joined: true }
          : event
      )
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-800">
          🎫 Upcoming Events
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <div
              key={event.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                👤 Posted by: {event.name}
              </p>
              <p className="text-sm text-gray-600 mb-1">📍 {event.location}</p>
              <p className="text-sm text-gray-600 mb-1">
                📅 {event.date} ⏰ {event.time}
              </p>
              <p className="text-sm text-gray-500 mt-2">{event.description}</p>
              <p className="text-sm font-medium text-gray-700 mt-3">
                👥 Attendees: {event.attendeeCount}
              </p>
              <button
                onClick={() => handleJoin(event.id)}
                disabled={event.joined}
                className={`mt-4 w-full py-2 rounded-lg font-medium ${
                  event.joined
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {event.joined ? 'Joined' : 'Join Event'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventPage;
