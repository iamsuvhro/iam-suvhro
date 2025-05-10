import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import client, { urlFor } from "../sanityClient";
import { useDarkMode } from "../context/DarkModeContext";
function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [newComment, setNewComment] = useState(""); // Track the new comment input
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    client
      .fetch(`*[_type == "blog" && _id == $id][0]`, { id })
      .then((data) => setBlog(data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  const handleLike = () => {
    if (!blog) return;
    console.log("Handling like..."); // Debug log

    const updatedLikes = blog.likes + 1;
    console.log("Updated Likes: ", updatedLikes); // Debug log

    client
      .patch(id) // Update the specific blog post by ID
      .set({ likes: updatedLikes }) // Set the new like count
      .commit()
      .then((updatedBlog) => {
        console.log("Like updated:", updatedBlog); // Debug log
        setBlog(updatedBlog); // Update the state with the updated blog data
      })
      .catch((err) => {
        console.error("Error liking blog:", err);
        alert("Error liking the blog.");
      });
  };

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return; // Don't submit empty comments

    console.log("Handling comment submission..."); // Debug log

    const newCommentObj = {
      author: "Anonymous", // Replace with actual user info if necessary
      text: newComment,
      createdAt: new Date().toISOString(),
    };

    client
      .patch(id) // Update the specific blog post by ID
      .append("comments", [newCommentObj]) // Append the new comment to the comments array
      .commit()
      .then((updatedBlog) => {
        console.log("Comment added:", updatedBlog); // Debug log
        setBlog(updatedBlog); // Update the state with the updated blog data
        setNewComment(""); // Clear the input field after submission
      })
      .catch((err) => {
        console.error("Error submitting comment:", err);
        alert("Error submitting comment.");
      });
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <button onClick={() => navigate(-1)} className="text-blue-500 mb-4">
        &#8592; Back
      </button>

      <h1 className={`text-4xl font-bold mb-4 ${isDarkMode && "text-white"}`}>
        {blog.title}
      </h1>
      <p className="text-gray-600 mb-2">
        <strong>Author:</strong> {blog.author} | <strong>Date:</strong>{" "}
        {new Date(blog.publishedAt).toLocaleDateString()}
      </p>
      {blog.image && (
        <img
          src={urlFor(blog.image).width(800).url()}
          alt={blog.title}
          className="rounded-xl mb-6"
        />
      )}
      <div
        className={`text-lg ${
          isDarkMode ? "text-white" : "text-gray-800"
        } whitespace-pre-line`}
      >
        {blog.content}
      </div>

      {/* Like button */}
      <div className="mt-4">
        <button
          onClick={handleLike}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Like ({blog.likes})
        </button>
      </div>

      {/* Comment Section */}
      <div className="mt-8">
        <h3
          className={`text-2xl font-semibold mb-4 ${
            isDarkMode && "text-white"
          }`}
        >
          Comments ({blog.comments?.length || 0})
        </h3>
        <div className="space-y-4">
          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((comment, index) => (
              <div
                key={index}
                className="flex gap-4 bg-white shadow-md p-4 rounded-xl border border-gray-200"
              >
                {/* User Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                    {comment.author?.charAt(0).toUpperCase()}
                  </div>
                </div>

                {/* Comment Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-800">
                      {comment.author}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(comment.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{comment.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>

        {/* Comment Form */}
        <textarea
          className="w-full mt-4 p-2 border rounded-md"
          placeholder="Write a comment..."
          rows="4"
          value={newComment} // Bind the input value to the state
          onChange={(e) => setNewComment(e.target.value)} // Update the state on input change
        />
        <button
          onClick={handleCommentSubmit}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Post Comment
        </button>
      </div>
    </div>
  );
}

export default BlogDetail;
