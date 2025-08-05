"use client";

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";

function BlogDetails({ params }) {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(
          `https://dev.to/api/articles/${personalData.devUsername}/${params.slug}`
        );
        if (!res.ok) throw new Error("Failed to fetch blog");

        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchBlog();
  }, [params.slug]);

  if (error) return <div>Error: {error}</div>;
  if (!blog) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="text-sm text-gray-500">By {blog.user.name}</p>
      <div
        className="mt-4 prose"
        dangerouslySetInnerHTML={{ __html: blog.body_html }}
      />
    </div>
  );
}

export default BlogDetails;
