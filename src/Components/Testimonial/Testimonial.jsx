// components/Testimonial.jsx

const Testimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          💬 What People Say
        </h2>

        <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl mx-auto max-w-xl">
          <div className="flex justify-center -mt-16">
            <img
              src="https://i.pravatar.cc/100"
              alt="testimonial"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <p className="text-lg italic text-gray-700 mt-6">
            “Eventify completely changed the way I organize my life. It’s
            simple, powerful, and makes every gathering feel professional.”
          </p>
          <h3 className="mt-6 font-semibold text-gray-800 text-lg">
            Sarah Ali
          </h3>
          <span className="text-sm text-gray-500">
            Event Organizer, Creative Hub
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
