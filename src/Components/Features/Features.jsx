// components/Features.jsx
import {
  FaUserShield,
  FaBullseye,
  FaSearch,
  FaUserCircle,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaUserShield className="text-4xl text-blue-600" />,
    title: 'Custom Authentication',
    description: 'Secure login & registration without third-party libraries.',
  },
  {
    icon: <FaBullseye className="text-4xl text-green-600" />,
    title: 'Join Event System',
    description: 'Users can join events & track attendance count.',
  },
  {
    icon: <FaSearch className="text-4xl text-yellow-600" />,
    title: 'Filter & Search',
    description: 'Easily find events by title or date range.',
  },
  {
    icon: <FaUserCircle className="text-4xl text-purple-600" />,
    title: 'Personal Event Dashboard',
    description: 'Manage your created events with update/delete access.',
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          🌟 Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
