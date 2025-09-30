const initialState = {
  loading: false,
  pages: {}, // {1: [...], 2: [...], ...}
  totalResults: 0,
  nextPages: {}, // {1: "cursorForPage2", 2: "cursorForPage3", ...}
  error: null,
};

export default function blogsReducer(state = initialState, action) {
  switch (action.type) {
    case "BLOGS_REQUEST":
      return { ...state, loading: true };

    case "BLOGS_SUCCESS":
      return {
        ...state,
        loading: false,
        pages: {
          ...state.pages,
          [action.payload.page]: action.payload.articles,
        },
        nextPages: {
          ...state.nextPages,
          [action.payload.page]: action.payload.nextPage,
        },
        totalResults: action.payload.totalResults,
      };

    case "BLOGS_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
