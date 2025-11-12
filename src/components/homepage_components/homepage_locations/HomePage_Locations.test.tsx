import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

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
    navigateMock.mockClear();
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

  it("makes the featured card interactive and routes to the detail page", () => {
    render(
      <MemoryRouter>
        <HomePage_Locations />
      </MemoryRouter>
    );

    const firstCard = screen.getAllByRole("article")[0];
    expect(firstCard).toHaveAttribute("role", "link");
    expect(firstCard).toHaveAttribute("tabIndex", "0");

    fireEvent.click(firstCard);

    expect(navigateMock).toHaveBeenCalledWith(
      "/property_details/atlas-penthouse-501",
      expect.objectContaining({
        state: {
          property: expect.objectContaining({ id: 501, property_name: "Atlas Penthouse 501" }),
        },
      })
    );
  });
});
