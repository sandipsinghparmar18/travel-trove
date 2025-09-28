export const addToWishlist = (hotel) => (dispatch) => {
  dispatch({ type: "WISHLIST_ADD", payload: hotel });
};

export const removeFromWishlist = (hotelId) => (dispatch) => {
  dispatch({ type: "WISHLIST_REMOVE", payload: hotelId });
};
