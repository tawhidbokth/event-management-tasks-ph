// components/AddEventPage.jsx

import { useState } from 'react';

const AddEventPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    date: '',
    time: '',
    location: '',
    description: '',
    attendeeCount: 0,
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('📝 Event Submitted:', formData);
    alert('✅ Event added successfully (dummy)');
    // Later: send data to backend (MongoDB)
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-indigo-800">
          ➕ Add New Event
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-8 rounded-2xl shadow-md space-y-5"
        >
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            className="w-full p-3 rounded-md border"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-md border"
            onChange={handleChange}
            required
          />
          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              className="w-1/2 p-3 rounded-md border"
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              className="w-1/2 p-3 rounded-md border"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="location"
            placeholder="Event Location"
            className="w-full p-3 rounded-md border"
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Event Description"
            rows="4"
            className="w-full p-3 rounded-md border"
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700"
          >
            Add Event
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddEventPage;
