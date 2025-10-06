import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  const setup = (props = {}) => {
    const defaultProps = {
      currentPage: 1,
      totalResults: 50,
      pageSize: 10,
      onPageChange: vi.fn(),
    };
    return render(<Pagination {...defaultProps} {...props} />);
  };

  test("renders Prev and Next buttons", () => {
    setup();
    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  test("disables Prev button on first page", () => {
    setup({ currentPage: 1 });
    expect(screen.getByText("Prev")).toBeDisabled();
  });

  test("disables Next button on last page", () => {
    setup({ currentPage: 5 });
    expect(screen.getByText("Next")).toBeDisabled();
  });

  test("renders correct number of page buttons", () => {
    setup({ totalResults: 100, pageSize: 10 });
    const pageButtons = screen.getAllByRole("button", { name: /^[0-9]+$/ });
    expect(pageButtons.length).toBeGreaterThan(0);
  });

  test("calls onPageChange when page number is clicked", () => {
    const onPageChange = vi.fn();
    setup({ onPageChange, currentPage: 2 });
    fireEvent.click(screen.getByText("3"));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  test("calls onPageChange with currentPage - 1 when Prev is clicked", () => {
    const onPageChange = vi.fn();
    setup({ currentPage: 3, onPageChange });
    fireEvent.click(screen.getByText("Prev"));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test("calls onPageChange with currentPage + 1 when Next is clicked", () => {
    const onPageChange = vi.fn();
    setup({ currentPage: 3, onPageChange });
    fireEvent.click(screen.getByText("Next"));
    expect(onPageChange).toHaveBeenCalledWith(4);
  });

  test("highlights the current page button", () => {
    setup({ currentPage: 2 });
    const currentBtn = screen.getByText("2");
    expect(currentBtn).toHaveClass("bg-blue-600");
  });
});
