// components/HowItWorks.jsx
import { FaUserPlus, FaCalendarCheck, FaChartLine } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUserPlus className="text-4xl text-indigo-600" />,
    title: 'Create Account',
    description:
      "Sign up with your email to get started. It's fast and secure.",
  },
  {
    icon: <FaCalendarCheck className="text-4xl text-green-600" />,
    title: 'Add or Join Events',
    description: 'Post new events or join any event you like with one click.',
  },
  {
    icon: <FaChartLine className="text-4xl text-rose-600" />,
    title: 'View Dashboard',
    description:
      'Track your events, update or delete them from your dashboard.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          📋 How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
