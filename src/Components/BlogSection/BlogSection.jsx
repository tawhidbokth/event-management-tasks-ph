// components/BlogSection.jsx

const blogs = [
  {
    id: 1,
    title: 'Why Event Planning Matters in 2025',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d', // conference room
    description:
      'Discover how modern event planning improves organization, efficiency, and connection in a digital world.',
    author: 'Amina Rahman',
    date: 'June 20, 2025',
  },
  {
    id: 2,
    title: 'Top 5 Tools for Seamless Event Management',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0', // laptop & tools
    description:
      'Explore the best digital tools to manage events — from scheduling to attendee tracking.',
    author: 'Karim Hossain',
    date: 'June 15, 2025',
  },
  {
    id: 3,
    title: 'The Psychology of Attending Events',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6', // people gathering
    description:
      'Learn why people attend events and how to design experiences that truly connect with your audience.',
    author: 'Shumi Akter',
    date: 'June 10, 2025',
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          📰 Latest Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{blog.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>🖋 {blog.author}</span>
                  <span>📅 {blog.date}</span>
                </div>
                <button className="mt-auto text-indigo-600 hover:underline font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
