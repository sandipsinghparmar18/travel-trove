import { newsApi } from "../../api/axiosInstance";

export const fetchBlogs =
  (page = 1, nextPage = null) =>
  async (dispatch, getState) => {
    const { blogs } = getState();

    // ✅ If already cached, skip API request
    if (blogs.pages[page]) return;

    dispatch({ type: "BLOGS_REQUEST" });

    try {
      const params = {
        q: "traveling OR tourism",
        language: "en",
        country: "in",
      };

      if (nextPage) {
        params.page = nextPage; // newsdata.io uses page cursor
      }

      const resp = await newsApi.get("/latest", { params });

      //console.log(resp);
      const articles = resp.data?.results ?? [];
      const totalResults = resp.data?.totalResults ?? 0;

      dispatch({
        type: "BLOGS_SUCCESS",
        payload: {
          page,
          articles,
          totalResults,
          nextPage: resp.data?.nextPage || null, // store for next fetch
        },
      });
    } catch (err) {
      dispatch({
        type: "BLOGS_FAIL",
        payload: err.response?.data?.message || err.message,
      });
    }
  };
