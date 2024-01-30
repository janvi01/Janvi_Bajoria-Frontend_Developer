import { render, screen, fireEvent } from "@testing-library/react";
import HeroLayout from "../components/HeroLayout";

describe("HeroLayout component", () => {
  test("renders SpaceX Text", () => {
    render(<HeroLayout />);
    const spacexLogos = screen.getAllByText("SpaceX");
    expect(spacexLogos.length).toBeGreaterThan(0);
  });

  test("clicks on navigation links", () => {
    render(<HeroLayout />);
    const navigationLinks = screen.getAllByRole("link", {
      name: /Mission|Rockets|Capsules|About us|Log in/,
    });

    navigationLinks.forEach((link) => {
      fireEvent.click(link);
      // Add assertions based on your expected behavior after clicking each link
    });
  });
});
