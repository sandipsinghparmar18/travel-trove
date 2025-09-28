import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/blogs/blogsActions";
import Pagination from "../components/Pagination";

const Blogs = () => {
  const dispatch = useDispatch();
  const {
    pages = {},
    loading,
    error,
    totalResults,
  } = useSelector((state) => state.blogs);

  const [page, setPage] = useState(1);
  const pageSize = 12;

  // ✅ Get cached articles for current page
  const articles = pages[page] || [];

  // ✅ Limit total pages to max 4–5 (to save API quota)
  const totalPages = totalResults
    ? Math.min(Math.ceil(totalResults / pageSize), 4)
    : 1;

  // ✅ Fetch only if not cached
  useEffect(() => {
    if (!pages[page]) {
      dispatch(fetchBlogs(page, pageSize));
    }
  }, [dispatch, page, pageSize, pages]);

  // ✅ Image fallback (handles null, empty, invalid formats)
  const getValidImage = (url) => {
    if (!url) {
      return "https://plus.unsplash.com/premium_photo-1664472706956-42f42184f7a9?q=80&w=2070&auto=format&fit=crop";
    }
    //these are doing in the last when handling the error
    const protocol = "https://";
    const lastIndex = url.lastIndexOf(protocol);
    if (lastIndex === -1) {
      return url;
    }
    return url.substring(lastIndex);
  };

  return (
    <div className="px-4 py-8 bg-gray-900">
      <h2 className="text-2xl font-semibold mb-6 text-white">Travel Blogs</h2>

      {/* Loading & Error States */}
      {loading && !articles.length && (
        <p className="text-white">Loading blogs...</p>
      )}
      {error && <p className="text-red-500">{error}</p>}

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 xl:grid-cols-4">
        {articles.map((blog, i) => (
          <div
            key={blog.url || i}
            className="bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform group hover:scale-105 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-600
             hover:text-white hover:shadow-purple-600/50"
          >
            {/* Blog Image */}
            <img
              src={getValidImage(blog.urlToImage)}
              alt={blog.title || "Blog image"}
              className="h-44 w-full object-cover"
            />

            {/* Blog content */}
            <div className="p-4 transition-colors duration-300 group-hover:text-white">
              <h3 className="font-semibold line-clamp-2 text-white group-hover:text-white">
                {blog.title}
              </h3>
              <p className="text-sm text-amber-400 mt-2 line-clamp-3 group-hover:text-amber-400">
                {blog.description}
              </p>
              <a
                href={blog.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-medium mt-3 inline-block hover:underline group-hover:text-blue-400"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={page}
            totalResults={totalResults}
            pageSize={pageSize}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default Blogs;
