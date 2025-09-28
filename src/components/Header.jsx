import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { TravelTroveLogo } from "../assets/Logo/TravelTroveLogo"; // place your logo.svg here or change path

const Header = () => {
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow sticky top-0 z-50">
      <div className="container px-4 py-3 flex items-center justify-between">
        {/* <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-8 w-8 object-contain" />
          <span className="font-bold text-lg text-primary">TravelTrove</span>
        </Link> */}
        <TravelTroveLogo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold"
                : "text-white hover:text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/hotels"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold"
                : "text-white hover:text-primary"
            }
          >
            Hotels
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold"
                : "text-white hover:text-primary"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold"
                : "text-white hover:text-primary"
            }
          >
            About
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/favorites" className="relative">
            <FaHeart className="text-xl text-white hover:text-red-500" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-3 space-y-2">
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/hotels" onClick={() => setOpen(false)}>
              Hotels
            </NavLink>
            <NavLink to="/blogs" onClick={() => setOpen(false)}>
              Blogs
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
