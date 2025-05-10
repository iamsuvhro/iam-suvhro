import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client, { urlFor } from "../sanityClient";
import { useDarkMode } from "../context/DarkModeContext";
function Blog() {
  const [blogs, setBlogs] = useState([]);
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    client
      .fetch(
        '*[_type == "blog"]{_id, title, content, image, publishedAt, author}'
      )
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section>
      <div className="col-span-8">
        <p className="text-6xl mb-4 font-sans font-bold bg-gradient-to-r from-purple-400 via-pink-700 to-red-500 bg-clip-text text-transparent">
          Blogs
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="blog-card p-4 border rounded-xl shadow-md"
            >
              {blog.image && (
                <img
                  src={urlFor(blog.image).width(400).url()}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
              )}
              <h3
                className={`text-xl font-bold mb-2 ${
                  isDarkMode && "text-white"
                }`}
              >
                {blog.title}
              </h3>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-white" : "text-gray-600"
                } mb-2`}
              >
                <strong>Author:</strong> {blog.author} <br />
                <strong>Published:</strong>{" "}
                {new Date(blog.publishedAt).toLocaleDateString()}
              </p>
              <p
                className={`${
                  isDarkMode ? "text-white" : "text-gray-700"
                } mb-4`}
              >
                {blog.content.slice(0, 100)}...
              </p>
              <Link
                to={`/blog/${blog._id}`}
                className="text-white bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-2 rounded-full text-sm"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
