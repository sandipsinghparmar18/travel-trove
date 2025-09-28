const initialState = {
  items: [],
};

export default function wishlistReducer(state = initialState, action) {
  switch (action.type) {
    case "WISHLIST_ADD":
      if (state.items.find((h) => h.id === action.payload.id)) return state;
      return { ...state, items: [action.payload, ...state.items] };
    case "WISHLIST_REMOVE":
      return {
        ...state,
        items: state.items.filter((h) => h.id !== action.payload),
      };
    default:
      return state;
  }
}
