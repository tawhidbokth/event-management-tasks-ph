// components/MyEventsPage.jsx

import { useState } from 'react';

const dummyMyEvents = [
  {
    id: 1,
    title: 'React Developer Conference',
    name: 'Tawhid Ahmed',
    date: '2025-07-12',
    time: '10:00',
    location: 'Dhaka IT Park',
    description: 'A community-driven ReactJS conference in BD.',
    attendeeCount: 45,
  },
  {
    id: 2,
    title: 'Eid Reunion Party',
    name: 'Tawhid Ahmed',
    date: '2025-07-15',
    time: '18:00',
    location: 'Sylhet Cafe',
    description: 'Family and friends gathering after Eid.',
    attendeeCount: 28,
  },
];

const MyEventsPage = () => {
  const [myEvents, setMyEvents] = useState(dummyMyEvents);

  const handleDelete = id => {
    const confirm = window.confirm(
      'Are you sure you want to delete this event?'
    );
    if (confirm) {
      const updatedEvents = myEvents.filter(event => event.id !== id);
      setMyEvents(updatedEvents);
      alert('🗑️ Event deleted (dummy)');
    }
  };

  const handleUpdate = id => {
    alert(`🛠️ Update clicked for Event ID: ${id} (dummy)`);
    // Future: Open modal or redirect to update page
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-800">
          📋 My Events
        </h2>

        {myEvents.length === 0 ? (
          <p className="text-center text-gray-500">No events found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myEvents.map(event => (
              <div
                key={event.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-indigo-700">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">👤 {event.name}</p>
                <p className="text-sm text-gray-600">
                  📅 {event.date} ⏰ {event.time}
                </p>
                <p className="text-sm text-gray-600">📍 {event.location}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {event.description}
                </p>
                <p className="text-sm font-medium text-gray-700 mt-3">
                  👥 Attendees: {event.attendeeCount}
                </p>

                <div className="mt-4 flex justify-between gap-3">
                  <button
                    onClick={() => handleUpdate(event.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyEventsPage;
