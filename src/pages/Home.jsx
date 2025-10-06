import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const blogs = useSelector((s) => s.blogs.pages[1]) || [];

  // ✅ Fallback blogs (will be shown if no cached blogs yet)
  const defaultBlogs = [
    {
      title: "Exploring the Beauty of Bali 🌴",
      description:
        "From serene beaches to lush rice terraces, Bali offers a magical experience for every traveler.",
      url: "https://www.lonelyplanet.com/indonesia/bali",
      image_url:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Top 10 Hidden Gems in Europe ✈️",
      description:
        "Discover the less-traveled towns and scenic spots across Europe that every wanderer should visit.",
      url: "https://www.travelandleisure.com/worlds-best-hidden-gems",
      image_url:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "A Guide to Solo Travel Adventures 🌍",
      description:
        "Traveling solo can be life-changing. Here are tips and destinations perfect for solo explorers.",
      url: "https://www.nomadicmatt.com/solo-travel-guide",
      image_url:
        "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const displayBlogs = blogs.length > 0 ? blogs.slice(0, 3) : defaultBlogs;

  return (
    <div className="container px-4 py-8">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-lg p-10 mb-12 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Explore the World with{" "}
              <span className="text-yellow-400">TravelTrove</span>
            </h1>
            <p className="mt-4 max-w-xl text-gray-300">
              Discover inspiring travel blogs, explore hotels worldwide, and
              save your favorites to your wishlist — all in one place.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                to="/hotels"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-5 py-2 rounded-lg font-medium shadow transition"
              >
                Browse Hotels
              </Link>
              <Link
                to="/blogs"
                className="border border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-5 py-2 rounded-lg font-medium shadow transition"
              >
                Read Blogs
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop"
              alt="Travel"
              className="w-full h-64 md:h-80 object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section>
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">
          ✨ Latest Travel Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {displayBlogs.map((b, i) => {
            const image =
              b.image_url ||
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80";

            return (
              <div
                key={i}
                className="bg-gray-900 text-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-yellow-500/40 group"
              >
                <img
                  src={image}
                  alt={b.title}
                  className="h-48 w-full object-cover group-hover:opacity-90 transition"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg group-hover:text-yellow-400 transition line-clamp-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                    {b.description || "No description available."}
                  </p>
                  <a
                    href={b.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-400 hover:underline mt-3 inline-block font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/blogs"
            className="inline-block px-6 py-2 bg-gray-800 text-yellow-400 border border-yellow-400 rounded-lg shadow hover:bg-yellow-400 hover:text-gray-900 transition"
          >
            View All Blogs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
