const initialState = {
  hotels: [],
  loading: false,
  error: null,
  detail: {
    hotel: null,
    loading: false,
    error: null,
  },
};

export default function hotelsReducer(state = initialState, action) {
  switch (action.type) {
    case "HOTELS_REQUEST":
      return { ...state, loading: true, error: null };
    case "HOTELS_SUCCESS":
      return { ...state, loading: false, hotels: action.payload };
    case "HOTELS_FAIL":
      return { ...state, loading: false, error: action.payload };

    case "HOTEL_DETAIL_REQUEST":
      return { ...state, detail: { hotel: null, loading: true, error: null } };
    case "HOTEL_DETAIL_SUCCESS":
      return {
        ...state,
        detail: { hotel: action.payload, loading: false, error: null },
      };
    case "HOTEL_DETAIL_FAIL":
      return {
        ...state,
        detail: { hotel: null, loading: false, error: action.payload },
      };

    default:
      return state;
  }
}
