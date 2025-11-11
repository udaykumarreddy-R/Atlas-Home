import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../../styles/listings.css?inline", () => ({ default: "" }));

const loadListingImagesMock = vi.fn(() => ({
  "501": ["penthouse.jpg"],
  "101": ["101.jpg"],
  "102": ["102.jpg"],
}));

vi.mock("../../../utils/loadListingImages", () => ({
  loadListingImages: () => loadListingImagesMock(),
}));

import HomePage_Locations from "./HomePage_Locations";

describe("HomePage_Locations", () => {
  beforeEach(() => {
    loadListingImagesMock.mockClear();
  });

  it("renders the featured listing with the featured class", () => {
    render(
      <MemoryRouter>
        <HomePage_Locations />
      </MemoryRouter>
    );

    const cards = screen.getAllByRole("article");
    expect(cards[0]).toHaveClass("featured");
    expect(cards[0]).toHaveAttribute("aria-label", "Penthouse 501 featured");
  });

  it("orders the featured listing first", () => {
    render(
      <MemoryRouter>
        <HomePage_Locations />
      </MemoryRouter>
    );

    const cards = screen.getAllByRole("article");
    const firstCard = cards[0];
    expect(within(firstCard).getByText("Atlas Penthouse 501")).toBeInTheDocument();
  });

  it("uses the image returned by the loader for the featured listing", () => {
    render(
      <MemoryRouter>
        <HomePage_Locations />
      </MemoryRouter>
    );

    const featuredImage = screen.getByAltText("Atlas Penthouse 501 cover") as HTMLImageElement;
    expect(featuredImage.src).toContain("penthouse.jpg");
  });
});
