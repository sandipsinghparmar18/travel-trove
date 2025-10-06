import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import HotelCard from "./HotelCard";
import { describe, test } from "vitest";

const mockStore = configureStore([]);

const renderWithProviders = (ui, { initialState } = {}) => {
  const store = mockStore(initialState || { wishlist: { items: [] } });
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe("HotelCard Component", () => {
  const hotel = {
    id: "123",
    name: "Luxury Resort",
    city: "Goa",
    country: "india",
    main_photo:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: 5,
    price: "$200",
    reviewCount: 45,
  };
  test("render hotel information correctly", () => {
    renderWithProviders(<HotelCard hotel={hotel} />);
    // Hotel Name
    expect(
      screen.getByRole("link", { name: /Luxury Resort/i })
    ).toBeInTheDocument();

    // Hotel City & Country
    expect(screen.getByText(/Goa, INDIA/i)).toBeInTheDocument();

    // Stars
    expect(screen.getByText(/⭐ 5/i)).toBeInTheDocument();

    // Price
    expect(screen.getByText(/\$200/i)).toBeInTheDocument();

    // Reviews
    expect(screen.getByText(/45 reviews/i)).toBeInTheDocument();

    // Image
    expect(screen.getByRole("img", { name: /Luxury Resort/i })).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  });
  test("navigates to correct hotel detail page", () => {
    renderWithProviders(<HotelCard hotel={hotel} />);
    const link = screen.getByRole("link", { name: /Luxury Resort/i });
    expect(link).toHaveAttribute("href", "/hotels/123");
  });

  test("wishlist button toggles heart icon", () => {
    // Initially not in wishlist
    renderWithProviders(<HotelCard hotel={hotel} />);
    expect(screen.getByTestId("outlined-heart")).toBeInTheDocument();

    // Re-render with hotel added to wishlist
    const storeWithFav = mockStore({ wishlist: { items: [hotel] } });
    render(
      <Provider store={storeWithFav}>
        <BrowserRouter>
          <HotelCard hotel={hotel} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId("filled-heart")).toBeInTheDocument();
  });

  test("uses fallback image when no main_photo or thumbnail", () => {
    const hotelNoImage = { ...hotel, main_photo: "", thumbnail: "" };
    renderWithProviders(<HotelCard hotel={hotelNoImage} />);
    const img = screen.getByRole("img", { name: /Luxury Resort/i });
    expect(img.src).toMatch(/unsplash\.com/);
  });
});
