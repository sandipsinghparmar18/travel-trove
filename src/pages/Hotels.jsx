import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../features/hotels/hotelsActions";
import HotelCard from "../components/HotelCard";
import Pagination from "../components/Pagination";
import countries from "../data/countries.json";

const Hotels = () => {
  const dispatch = useDispatch();
  const { hotels = [], loading, error } = useSelector((s) => s.hotels);

  const [country, setCountry] = useState("IN");
  const [page, setPage] = useState(1);
  const perPage = 12; // Show 9 hotels per page

  useEffect(() => {
    if (country) dispatch(fetchHotels(country));
  }, [country, dispatch]);

  const totalPages = Math.ceil((hotels?.length || 0) / perPage) || 1;
  const paginated = hotels?.slice((page - 1) * perPage, page * perPage) ?? [];

  return (
    <div className=" mx-auto px-4 py-8 bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-3xl font-bold text-white">Hotels</h2>
        <div className="flex items-center gap-3">
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setPage(1);
            }}
            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
          >
            {countries.map((c) => (
              <option key={c.iso2} value={c.iso2}>
                {c.name} ({c.iso2})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Loading & Error */}
      {loading && <div className="text-white">Loading hotels...</div>}
      {error && <div className="text-red-500">{error}</div>}

      {/* Hotel Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginated.map((h) => (
          <HotelCard key={h.id ?? h.hotelId ?? h._id} hotel={h} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8">
        <Pagination
          currentPage={page}
          totalResults={hotels.length} // ✅ correct value
          pageSize={perPage}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default Hotels;
