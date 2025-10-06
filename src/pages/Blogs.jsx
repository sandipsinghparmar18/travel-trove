import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/blogs/blogsActions";
import Pagination from "../components/Common/Pagination/Pagination";

const Blogs = () => {
  const dispatch = useDispatch();
  const {
    pages = {},
    loading,
    error,
    totalResults,
    nextPages = {},
  } = useSelector((s) => s.blogs);

  const [page, setPage] = useState(1);

  // Fetch blogs on page change
  useEffect(() => {
    if (!pages[page]) {
      dispatch(fetchBlogs(page, nextPages[page - 1])); // pass previous page’s cursor if available
    }
  }, [dispatch, page, pages, nextPages]);

  const blogs = pages[page] || [];
  const totalPages = Math.ceil(totalResults / 10); // since API gives 10 per page

  const getSafeImage = (url) => {
    const fallback =
      "https://images.unsplash.com/photo-1616394585067-d3e824140aa1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    // If API returns empty/null
    if (!url) return fallback;

    return url;
  };

  return (
    <div className="px-4 py-8 bg-gray-900">
      <h2 className="text-2xl font-semibold mb-6 text-white">
        📰 Travel Blogs
      </h2>

      {loading && !blogs.length && (
        <p className="text-white">Loading blogs...</p>
      )}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 xl:grid-cols-4">
        {blogs.map((b, i) => (
          <div
            key={b.article_id || i}
            className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700"
          >
            <img
              src={getSafeImage(b.image_url)}
              alt={b.title || "Blog image"}
              className="h-44 w-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80";
              }}
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-white group-hover:text-yellow-400 line-clamp-2">
                {b.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                {b.description || "No description available."}
              </p>
              <a
                href={b.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 font-medium mt-3 inline-block hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={page}
            totalResults={totalResults}
            pageSize={10}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default Blogs;
