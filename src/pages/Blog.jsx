// components/BlogSection.jsx
import {
  FaClock,
  FaHeart,
  FaComment,
} from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: "/img/blog-1.png",
    title: "Dolor, sit amet consectetur adipisicing",
    date: "Dec 01, 2024",
    likes: 3,
    comments: 0,
    description:
      "Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.",
  },
  {
    id: 2,
    image: "/img/blog-2.png",
    title: "Dolor, sit amet consectetur adipisicing",
    date: "Dec 01, 2024",
    likes: 3,
    comments: 0,
    description:
      "Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.",
  },
  {
    id: 3,
    image: "/img/blog-3.png",
    title: "Dolor, sit amet consectetur adipisicing",
    date: "Dec 01, 2024",
    likes: 3,
    comments: 0,
    description:
      "Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.",
  },
  {
    id: 4,
    image: "/img/blog-4.png",
    title: "Dolor, sit amet consectetur adipisicing",
    date: "Dec 01, 2024",
    likes: 3,
    comments: 0,
    description:
      "Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.",
  },
];

const Blog = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h4 className="text-pink-500 font-semibold text-lg">Our Blog</h4>
          <h2 className="text-4xl font-bold mb-4">Join Us For New Blog</h2>
          <p className="text-gray-600">
            Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime.
            Vel animi eveniet doloremque reiciendis soluta iste provident non
            rerum illum perferendis earum est architecto dolores vitae quia
            vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo
            doloremque cum.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-lg shadow-sm border overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-sm flex justify-between px-4 py-2">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-xs" />
                    {blog.date}
                  </span>
                  <div className="flex gap-3 items-center">
                    <span className="flex items-center gap-1">
                      {blog.likes} <FaHeart className="text-xs" />
                    </span>
                    <span className="flex items-center gap-1">
                      {blog.comments} <FaComment className="text-xs" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 text-gray-700 flex-1 flex flex-col">
                <h5 className="text-lg font-semibold mb-3">{blog.title}</h5>
                <p className="mb-4 text-sm flex-1">{blog.description}</p>
                <a
                  href="#"
                  className="inline-block self-start text-sm bg-gray-100 hover:bg-gray-200 text-black font-medium px-4 py-2 rounded-full transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
