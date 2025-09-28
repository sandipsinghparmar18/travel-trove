import { liteApi } from "../../api/axiosInstance";

// fetch hotels by ISO2 countryCode
export const fetchHotels = (countryCode) => async (dispatch) => {
  dispatch({ type: "HOTELS_REQUEST" });
  try {
    const resp = await liteApi.get("/data/hotels", {
      params: { countryCode },
    });
    //console.log(resp);
    // LiteAPI may nest data; common patterns: resp.data.data or resp.data
    let hotels = resp.data?.data ?? resp.data ?? [];
    if (Array.isArray(hotels) && hotels.length > 50)
      hotels = hotels.slice(0, 99);

    dispatch({ type: "HOTELS_SUCCESS", payload: hotels });
  } catch (err) {
    dispatch({
      type: "HOTELS_FAIL",
      payload: err.response?.data?.message || err.message,
    });
  }
};

export const fetchHotelDetails = (hotelId) => async (dispatch) => {
  dispatch({ type: "HOTEL_DETAIL_REQUEST" });
  try {
    const resp = await liteApi.get("/data/hotel", {
      params: { hotelId },
    });

    dispatch({
      type: "HOTEL_DETAIL_SUCCESS",
      payload: resp?.data?.data ?? resp?.data ?? {},
    });
  } catch (err) {
    dispatch({
      type: "HOTEL_DETAIL_FAIL",
      payload: err.response?.data?.message || err.message,
    });
  }
};
