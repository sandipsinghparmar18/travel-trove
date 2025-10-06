import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders TravelTrove title", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText("TravelTrove")).toBeInTheDocument();
  });

  test("renders quick links", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Hotels/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Blogs/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Wishlist/i })).toBeInTheDocument();
  });

  test("renders contact info", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText(/support@traveltrove.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\+91 9876543210/i)).toBeInTheDocument();
  });

  test("newsletter input works", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/you@example.com/i);
    fireEvent.change(input, { target: { value: "test@mail.com" } });

    expect(input.value).toBe("test@mail.com");
  });

  test("renders social media icons", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Check if GitHub, LinkedIn, and Library icon links exist
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
  });
});
