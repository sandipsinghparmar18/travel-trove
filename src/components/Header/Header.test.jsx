import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Header from "./Header";

const mockStore = configureStore([]);

describe("Header Component", () => {
  it("renders logo and navigation links", () => {
    const store = mockStore({ wishlist: { items: [] } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    // Logo
    expect(screen.getByText(/Travel/i)).toBeInTheDocument();

    // Desktop navigation
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Hotels/i)).toBeInTheDocument();
    expect(screen.getByText(/Blogs/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });

  it("shows wishlist count when items exist", () => {
    const store = mockStore({ wishlist: { items: ["hotel1", "hotel2"] } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("2")).toBeInTheDocument(); // wishlist badge
  });

  it("toggles mobile menu when button is clicked", () => {
    const store = mockStore({ wishlist: { items: [] } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    const button = screen.getByRole("button", { name: /menu/i });

    // Initially mobile menu should not be visible
    expect(screen.queryByText("Hotels")).toBeInTheDocument(); // Desktop visible
    expect(screen.queryByText("Blogs")).toBeInTheDocument();
    expect(screen.queryByText("About")).toBeInTheDocument();

    // Click to open
    fireEvent.click(button);
    expect(screen.getAllByText(/Home/i).length).toBeGreaterThan(1); // Both desktop + mobile

    // Click to close
    fireEvent.click(button);
    expect(screen.getByText(/Home/i)).toBeInTheDocument(); // Desktop still visible
  });
});
