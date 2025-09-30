import axios from "axios";

// LiteAPI for hotels
export const liteApi = axios.create({
  baseURL: "https://api.liteapi.travel/v3.0",
  headers: {
    "X-API-Key": import.meta.env.VITE_LITEAPI_KEY || "",
    "Content-Type": "application/json",
  },
});

// NewsAPI for blogs/articles
// NewsAPI expects an apiKey query parameter; we set default params so you don't repeat it.
export const newsApi = axios.create({
  baseURL: "https://newsdata.io/api/1",
  params: {
    apiKey: import.meta.env.VITE_NEWSDATA_API_KEY || "",
  },
});

export default {
  liteApi,
  newsApi,
};
