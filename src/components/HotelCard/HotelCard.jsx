import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistActions";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((s) => s.wishlist.items);
  const isFav = wishlist.some((h) => h.id === hotel.id);

  const toggleFav = () => {
    if (isFav) dispatch(removeFromWishlist(hotel.id));
    else dispatch(addToWishlist(hotel));
  };

  const getHotelImage = (hotel) => {
    if (hotel.main_photo && hotel.main_photo.trim() !== "") {
      return hotel.main_photo;
    }
    if (hotel.thumbnail && hotel.thumbnail.trim() !== "") {
      return hotel.thumbnail;
    }
    return `https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`; // fallback
  };

  const image = getHotelImage(hotel);

  //console.log(hotel);
  return (
    <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.02] transition transform">
      {/* Hotel Image */}
      <div className="relative">
        <img
          src={image}
          alt={hotel.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={toggleFav}
          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500 p-2 rounded-full transition"
        >
          {isFav ? (
            <FaHeart data-testid="filled-heart" />
          ) : (
            <FaRegHeart data-testid="outlined-heart" />
          )}
        </button>
      </div>

      {/* Hotel Info */}
      <div className="p-4">
        <Link
          to={`/hotels/${hotel.id}`}
          className="text-lg font-semibold text-white hover:text-gray-200 transition"
        >
          {hotel.name}
        </Link>
        <p className="text-sm text-gray-400">
          {hotel.city ?? "Unknown City"}, {hotel.country?.toUpperCase() ?? ""}
        </p>

        {/* Stars & Price */}
        <div className="flex justify-between items-center mt-3">
          <div className="text-yellow-400 text-sm">
            ⭐ {hotel.stars ?? hotel.rating ?? "—"}
          </div>

          <div className="text-sm font-bold text-green-400">
            {hotel.price ?? "Contact for pricing"}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-2 text-xs text-gray-400">
          {hotel.reviewCount ? `${hotel.reviewCount} reviews` : "No reviews"}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
