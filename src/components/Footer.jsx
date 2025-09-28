import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineLocalLibrary } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-white font-bold text-xl">TravelTrove</h3>
          <p className="mt-3 text-sm">
            Explore destinations, read travel articles, and save hotels you
            love.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="hover:text-white">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="hover:text-white">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">📞 +91 9876543210</p>
          <p className="text-sm">✉️ support@traveltrove.com</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Newsletter</h4>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="you@example.com"
              className="p-2 rounded-2xl text-black mb-2 bg-gray-600"
            />
            <button className="py-2  text-white cursor-pointer bg-amber-400 mx-auto px-2 rounded-2xl">
              Subscribe
            </button>
          </form>
          <div className="flex gap-3 mt-4 text-xl">
            <a href="https://www.linkedin.com/in/sandip-singh-parmar-b29034251/">
              <FaLinkedin className="hover:text-white" />
            </a>
            <a
              href="https://mern-portfolio-frontend-gy7s.onrender.com/"
              aria-label="twitter"
            >
              <MdOutlineLocalLibrary className="hover:text-white" />
            </a>
            <a href="https://github.com/sandipsinghparmar18">
              <FaGithub className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-3 text-sm">
        © {new Date().getFullYear()} TravelTrove. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
