const initialState = {
  pages: {}, // ✅ cache blogs per page
  totalResults: 0,
  loading: false,
  error: null,
};

export default function blogsReducer(state = initialState, action) {
  switch (action.type) {
    case "BLOGS_REQUEST":
      return { ...state, loading: true, error: null };

    case "BLOGS_SUCCESS": {
      const { articles, totalResults, page } = action.payload;
      return {
        ...state,
        loading: false,
        pages: {
          ...state.pages,
          [page]: articles, // ✅ store results under the page number
        },
        totalResults: totalResults ?? state.totalResults,
      };
    }

    case "BLOGS_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
