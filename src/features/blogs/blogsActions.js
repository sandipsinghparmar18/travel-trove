import { newsApi } from "../../api/axiosInstance";

export const fetchBlogs =
  (page = 1, pageSize = 9) =>
  async (dispatch, getState) => {
    const { blogs } = getState();

    // ✅ If this page is already cached, skip API request
    if (blogs.pages && blogs.pages[page]) return;

    dispatch({ type: "BLOGS_REQUEST" });

    try {
      const resp = await newsApi.get("/everything", {
        params: {
          q: "travel OR tourism OR hotel",
          language: "en",
          page,
          pageSize,
          sortBy: "publishedAt",
          excludeDomains: "biztoc.com",
        },
      });

      //console.log(resp);
      const articles = resp.data?.articles ?? [];
      const totalResults = resp.data?.totalResults ?? 0;

      dispatch({
        type: "BLOGS_SUCCESS",
        payload: { articles, totalResults, page },
      });
    } catch (err) {
      dispatch({
        type: "BLOGS_FAIL",
        payload: err.response?.data?.message || err.message,
      });
    }
  };
