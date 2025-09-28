import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelDetails } from "../features/hotels/hotelsActions";
import Carousel from "../components/Carousel";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistActions";
import { Star, Heart } from "lucide-react";
import { FaHeart } from "react-icons/fa";

const HotelDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((s) => s.hotels);
  const hotel = detail?.hotel;
  const loading = detail?.loading;

  const wishlist = useSelector((s) => s.wishlist.items);
  const isFav = wishlist.some((h) => h.id === id);

  const toggleFav = () => {
    if (isFav) dispatch(removeFromWishlist(hotel.id));
    else dispatch(addToWishlist(hotel));
  };

  useEffect(() => {
    if (id) dispatch(fetchHotelDetails(id));
  }, [id, dispatch]);

  //console.log(hotel);

  if (loading)
    return <div className="container px-4 py-8 text-gray-300">Loading...</div>;
  if (!hotel)
    return (
      <div className="container px-4 py-8 text-gray-300">No hotel found.</div>
    );

  const images = hotel?.hotelImages || [];
  const facilities = hotel?.hotelFacilities || [];
  const rooms = hotel?.rooms || [];
  const pros = hotel?.sentiment_analysis?.pros || [];
  const cons = hotel?.sentiment_analysis?.cons || [];
  const sentiment = hotel?.sentiment_analysis?.categories || [];

  return (
    <div className="bg-gray-900 min-h-screen text-gray-300 py-10">
      <div className="container mx-auto px-4 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-800 p-6 rounded-xl shadow-lg">
          <div>
            <h1 className="text-3xl font-bold text-white">{hotel.name}</h1>
            <p className="text-gray-400">
              {hotel.address}, {hotel.city}
            </p>
            <div className="flex items-center mt-2 space-x-2">
              {[...Array(hotel.starRating)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 w-5 h-5 fill-current"
                />
              ))}
              <span className="text-sm text-gray-400">
                {hotel.reviewCount} reviews
              </span>
            </div>
          </div>
          {isFav ? (
            <button
              onClick={toggleFav}
              className="flex items-center cursor-pointer gap-2 bg-gradient-to-r from-red-700 to-red-500  text-white px-4 py-2 rounded-lg shadow hover:opacity-90 mt-4 md:mt-0 transition"
            >
              <FaHeart className="w-4 h-4 " /> Remove
            </button>
          ) : (
            <button
              onClick={toggleFav}
              className="flex items-center cursor-pointer gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 mt-4 md:mt-0 transition"
            >
              <Heart className="w-4 h-4" /> Add to Wishlist
            </button>
          )}
        </div>

        {/* Image Carousel */}
        <Carousel images={images} />

        {/* Description */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-3">
            About this property
          </h2>
          <div
            className="prose prose-invert text-gray-300 max-w-none"
            dangerouslySetInnerHTML={{ __html: hotel.hotelDescription }}
          />
        </section>

        {/* Facilities */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-3">Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {facilities.slice(0, 12).map((f, idx) => (
              <span
                key={idx}
                className="text-sm bg-gray-700 px-3 py-1 rounded-lg cursor-pointer 
             transition-all duration-300 transform 
             hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 
             hover:text-white"
              >
                {f}
              </span>
            ))}
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-green-400 mb-3">Pros</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              {pros.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-red-400 mb-3">Cons</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              {cons.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sentiment Analysis */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-3">
            Guest Feedback
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {sentiment.map((s, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-gray-800 text-gray-300 
             transition-all duration-300 transform hover:scale-105 
             hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <h4 className="font-semibold">
                  {s.name} – {s.rating}/10
                </h4>
                <p className="text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rooms */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-3">Rooms</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="p-4 rounded-lg bg-gray-700 cursor-pointer transition-all duration-300 
             transform hover:scale-105 
             hover:bg-gradient-to-r hover:from-indigo-700 hover:to-pink-600 
             hover:shadow-xl hover:shadow-pink-500/40"
              >
                <h4 className="font-semibold text-white">{room.roomName}</h4>
                <p
                  className="text-sm text-gray-300"
                  dangerouslySetInnerHTML={{ __html: room.description }}
                />
                <p className="text-sm mt-1 text-gray-400">
                  Size: {room.roomSizeSquare} {room.roomSizeUnit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Policies */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-3">Policies</h2>
          <ul className="space-y-2">
            {hotel.policies?.map((p) => (
              <li key={p.id} className="text-sm text-gray-300">
                <strong className="text-white">{p.name}: </strong>
                {p.description}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HotelDetail;
