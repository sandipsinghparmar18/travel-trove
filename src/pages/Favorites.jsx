import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistActions";

const Favorites = () => {
  const items = useSelector((s) => s.wishlist.items);
  const dispatch = useDispatch();

  //console.log(items);

  const getHotelImage = (hotel) => {
    if (hotel.main_photo && hotel.main_photo.trim() !== "") {
      return hotel.main_photo;
    }
    if (hotel.thumbnail && hotel.thumbnail.trim() !== "") {
      return hotel.thumbnail;
    }
    return `https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`; // fallback
  };

  if (!items || items.length === 0)
    return <div className="container px-4 py-8">No favorites yet.</div>;

  return (
    <div className="container px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((h) => (
          <div
            key={h.hotelId ?? h.id}
            className="bg-white rounded shadow overflow-hidden"
          >
            <img
              src={getHotelImage(h)}
              alt={h.name}
              className="h-44 w-full object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold">{h.name}</h3>
              <p className="text-sm text-gray-600">{h.city}</p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => dispatch(removeFromWishlist(h.id))}
                  className="px-3 py-1 rounded bg-red-500 text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
