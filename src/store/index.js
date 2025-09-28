// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "../features/hotels/hotelsReducer";
import blogsReducer from "../features/blogs/blogsReducer";
import wishlistReducer from "../features/wishlist/wishlistReducer";

// Load wishlist from localStorage
const persistedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    blogs: blogsReducer,
    wishlist: wishlistReducer,
  },
  preloadedState: {
    wishlist: { items: persistedWishlist },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // useful if you store non-serializable data
    }),
  devTools: true, // enabled by default
});

// Persist wishlist to localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("wishlist", JSON.stringify(state.wishlist.items));
});

export default store;
