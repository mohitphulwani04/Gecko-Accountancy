import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../../services";
import BlogCard from "./BlogCard";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blogsData = await fetchBlogs();
        console.log("blog==", blogsData);
        setBlogs(blogsData);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;

  console.log("blogs", blogs);

  return (
    <section className="mt-10 bg-[#E7F1F2] p-8 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Blogs</h2>
        <a href="/blogs" className="text-blue-500 hover:underline text-sm">
          View All →
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            name={blog.name}
            writerName={blog.writer_name}
            description={blog.short_description}
            imageUrl={blog.image_url}
            createdAt={blog.createdAt}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
