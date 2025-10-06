import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import { vi } from "vitest";

// Mock Swiper to avoid real rendering
vi.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="mock-swiper">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="mock-slide">{children}</div>,
}));

vi.mock("swiper/modules", () => ({
  Autoplay: vi.fn(),
  Navigation: vi.fn(),
}));

describe("Carousel Component", () => {
  test("renders fallback when no images", () => {
    render(<Carousel images={[]} />);
    expect(screen.getByText(/No images available/i)).toBeInTheDocument();
  });

  test("renders single image when only one image provided", () => {
    const images = [{ urlHd: "https://example.com/image1.jpg" }];
    render(<Carousel images={images} />);
    const img = screen.getByRole("img", { name: /hotel/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", images[0].urlHd);
  });

  test("renders swiper with multiple images", () => {
    const images = [
      { urlHd: "https://example.com/image1.jpg" },
      { urlHd: "https://example.com/image2.jpg" },
      { urlHd: "https://example.com/image3.jpg" },
    ];

    render(<Carousel images={images} />);

    // Swiper container
    expect(screen.getByTestId("mock-swiper")).toBeInTheDocument();

    // Check all slides rendered
    const slides = screen.getAllByTestId("mock-slide");
    expect(slides.length).toBe(3);

    // Each slide image should exist
    images.forEach((_, idx) => {
      expect(screen.getByAltText(`slide-${idx}`)).toBeInTheDocument();
    });
  });

  test("renders navigation buttons", () => {
    const images = [
      { urlHd: "https://example.com/image1.jpg" },
      { urlHd: "https://example.com/image2.jpg" },
    ];

    render(<Carousel images={images} />);

    // Using querySelector because these buttons might have opacity 0
    const prevButton = document.querySelector(".custom-prev");
    const nextButton = document.querySelector(".custom-next");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    // Optional: check for icons
    expect(prevButton.querySelector("svg")).toBeTruthy();
    expect(nextButton.querySelector("svg")).toBeTruthy();
  });
});
